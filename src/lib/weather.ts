export const WEATHER_LOCATION = {
  latitude: 33.6899848,
  longitude: 73.091096,
  timezone: 'Asia/Karachi',
};

type WmoEntry = {
  text: string;
  umbrella: boolean;
};

// WMO weather interpretation codes -> Urdu description + umbrella heuristic
const WMO: Record<number, WmoEntry> = {
  0: { text: 'صاف آسمان', umbrella: false },
  1: { text: 'زیادہ تر صاف', umbrella: false },
  2: { text: 'جزوی ابر آلود', umbrella: false },
  3: { text: 'ابر آلود', umbrella: false },
  45: { text: 'دھند', umbrella: false },
  48: { text: 'جمی ہوئی دھند', umbrella: false },
  51: { text: 'ہلکی بوندا باندی', umbrella: true },
  53: { text: 'بوندا باندی', umbrella: true },
  55: { text: 'تیز بوندا باندی', umbrella: true },
  56: { text: 'جمی ہوئی بوندا باندی', umbrella: true },
  57: { text: 'جمی ہوئی بوندا باندی', umbrella: true },
  61: { text: 'ہلکی بارش', umbrella: true },
  63: { text: 'درمیانی بارش', umbrella: true },
  65: { text: 'تیز بارش', umbrella: true },
  66: { text: 'جمی ہوئی بارش', umbrella: true },
  67: { text: 'جمی ہوئی بارش', umbrella: true },
  71: { text: 'ہلکی برفباری', umbrella: false },
  73: { text: 'درمیانی برفباری', umbrella: false },
  75: { text: 'تیز برفباری', umbrella: false },
  77: { text: 'برف کے دانے', umbrella: false },
  80: { text: 'ہلکی بوندیں', umbrella: true },
  81: { text: 'درمیانی بوندیں', umbrella: true },
  82: { text: 'تیز بوندیں', umbrella: true },
  85: { text: 'ہلکی برفباری', umbrella: false },
  86: { text: 'تیز برفباری', umbrella: false },
  95: { text: 'گرج چمک طوفان', umbrella: true },
  96: { text: 'گرج چمک اور اولے', umbrella: true },
  99: { text: 'گرج چمک اور بڑے اولے', umbrella: true },
};

export function describeWmo(code: number): WmoEntry {
  return WMO[code] ?? { text: 'موسم کی تبدیلی', umbrella: false };
}

export function outfitHint(apparent: number): string {
  if (apparent < 10) return 'گرم کپڑے، جیکٹ اور ہلکی ٹوپی ساتھ رکھیں۔';
  if (apparent < 20) return 'ہلکی جیکٹ یا سویٹر کافی رہتا ہے۔';
  if (apparent < 30) return 'سوتی اور ہلکے کپڑے موزوں ہیں۔';
  return 'ہلکے رنگ کے سوتی کپڑے، پانی اور دھوپ کا تحفظ رکھیں۔';
}

export type DayForecast = {
  date: string;
  weekday: string;
  code: number;
  text: string;
  tmax: number;
  tmin: number;
  precipSum: number;
  precipProb: number;
  umbrella: boolean;
};

export type WeatherData = {
  updatedAt: string;
  current: {
    temp: number;
    apparent: number;
    code: number;
    text: string;
    humidity: number;
    wind: number;
    umbrella: boolean;
    outfit: string;
    highUv: boolean;
  };
  days: DayForecast[];
};

const WEEKDAYS_UR = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
const CACHE_TTL_MS = 10 * 60 * 1000;

let cache: { at: number; data: WeatherData } | null = null;

export async function getWeather(): Promise<WeatherData> {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
    return cache.data;
  }

  const { latitude, longitude, timezone } = WEATHER_LOCATION;
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,uv_index_max` +
    `&timezone=${encodeURIComponent(timezone)}&forecast_days=7`;

  const res = await fetch(url, { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(`weather fetch failed: ${res.status}`);
  const j = (await res.json()) as any;

  const cur = j.current;
  const curInfo = describeWmo(cur.weather_code);
  const uvMaxToday = (j.daily?.uv_index_max?.[0] as number | undefined) ?? 0;

  const days: DayForecast[] = (j.daily?.time ?? []).map((date: string, i: number) => {
    const code = j.daily.weather_code[i] as number;
    const info = describeWmo(code);
    const precipProb = (j.daily.precipitation_probability_max?.[i] as number) ?? 0;
    const precipSum = (j.daily.precipitation_sum?.[i] as number) ?? 0;
    const d = new Date(date + 'T00:00:00');
    return {
      date,
      weekday: WEEKDAYS_UR[d.getDay()],
      code,
      text: info.text,
      tmax: Math.round(j.daily.temperature_2m_max[i]),
      tmin: Math.round(j.daily.temperature_2m_min[i]),
      precipSum,
      precipProb,
      umbrella: info.umbrella || precipProb >= 50 || precipSum >= 0.3,
    };
  });

  const data: WeatherData = {
    updatedAt: new Date().toISOString(),
    current: {
      temp: Math.round(cur.temperature_2m),
      apparent: Math.round(cur.apparent_temperature),
      code: cur.weather_code,
      text: curInfo.text,
      humidity: Math.round(cur.relative_humidity_2m),
      wind: Math.round(cur.wind_speed_10m),
      umbrella: curInfo.umbrella,
      outfit: outfitHint(cur.apparent_temperature),
      highUv: uvMaxToday >= 6,
    },
    days,
  };

  cache = { at: Date.now(), data };
  return data;
}
