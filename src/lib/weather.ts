import type { Locale } from '../i18n';

export const WEATHER_LOCATION = { latitude: 33.6869, longitude: 73.0656, timezone: 'Asia/Karachi' };

const WMO_BY_CODE: Record<number, { ur: string; en: string }> = {
  0: { ur: 'صاف آسمان', en: 'Clear sky' },
  1: { ur: 'زیادہ تر صاف', en: 'Mainly clear' },
  2: { ur: 'جزوی ابر آلود', en: 'Partly cloudy' },
  3: { ur: 'ابر آلود', en: 'Overcast' },
  45: { ur: 'دھند', en: 'Fog' },
  48: { ur: 'جمی ہوئی دھند', en: 'Rime fog' },
  51: { ur: 'ہلکی بوندا باندی', en: 'Light drizzle' },
  53: { ur: 'بوندا باندی', en: 'Moderate drizzle' },
  55: { ur: 'تیز بوندا باندی', en: 'Dense drizzle' },
  56: { ur: 'جمی ہوئی بوندا باندی', en: 'Freezing drizzle' },
  57: { ur: 'جمی ہوئی بوندا باندی', en: 'Freezing drizzle' },
  61: { ur: 'ہلکی بارش', en: 'Slight rain' },
  63: { ur: 'درمیانی بارش', en: 'Moderate rain' },
  65: { ur: 'تیز بارش', en: 'Heavy rain' },
  66: { ur: 'جمی ہوئی بارش', en: 'Freezing rain' },
  67: { ur: 'جمی ہوئی بارش', en: 'Freezing rain' },
  71: { ur: 'ہلکی برفباری', en: 'Slight snow' },
  73: { ur: 'درمیانی برفباری', en: 'Moderate snow' },
  75: { ur: 'تیز برفباری', en: 'Heavy snow' },
  77: { ur: 'برف کے دانے', en: 'Snow grains' },
  80: { ur: 'ہلکی بوندیں', en: 'Slight showers' },
  81: { ur: 'درمیانی بوندیں', en: 'Moderate showers' },
  82: { ur: 'تیز بوندیں', en: 'Violent showers' },
  85: { ur: 'ہلکی برفباری', en: 'Slight snow' },
  86: { ur: 'تیز برفباری', en: 'Heavy snow' },
  95: { ur: 'گرج چمک طوفان', en: 'Thunderstorm' },
  96: { ur: 'گرج چمک اور اولے', en: 'Thunderstorm with hail' },
  99: { ur: 'گرج چمک اور بڑے اولے', en: 'Severe thunderstorm with hail' },
};

const UMBRELLA_CODES = new Set([45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]);

function describeWmo(code: number, locale: Locale): string {
  const e = WMO_BY_CODE[code];
  if (e) return locale === 'en' ? e.en : e.ur;
  return locale === 'en' ? 'Weather change' : 'موسم کی تبدیلی';
}

function computeOutfit(code: number, highUv: boolean, locale: Locale): string {
  if (UMBRELLA_CODES.has(code)) {
    return locale === 'en'
      ? 'Carry an umbrella or rain layer; paved paths can get slippery.'
      : 'چھتری یا بارش کا لباس ساتھ رکھیں؛ پختہ پگڈنڈیاں پھسلنے والی ہو سکتی ہیں۔';
  }
  if (highUv) {
    return locale === 'en'
      ? 'Sun can be strong: a hat, sunglasses, and sunscreen help.'
      : 'دھوپ زیادہ ہو سکتی ہے: ٹوپی، شیشے اور سن اسکرین مفید رہتے ہیں۔';
  }
  return locale === 'en'
    ? 'Light, breathable clothing and water are enough for a short visit.'
    : 'ہلکے کپڑے اور پانی ایک چھوٹے دورے کے لیے کافی ہیں۔';
}

function weekday(dateStr: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-US' : 'ur-PK', { weekday: 'short' }).format(new Date(dateStr + 'T00:00:00'));
  } catch {
    return '';
  }
}

export type WeatherCurrent = {
  temp: number;
  text: string;
  apparent: number;
  humidity: number;
  wind: number;
  umbrella: boolean;
  outfit: string;
  highUv: boolean;
};
export type WeatherDay = {
  weekday: string;
  text: string;
  tmax: number;
  tmin: number;
  precipProb: number;
  umbrella: boolean;
};
export type WeatherSnapshot = {
  updatedAt: string;
  current: WeatherCurrent;
  days: WeatherDay[];
};

export async function getWeather(locale: Locale = 'ur'): Promise<WeatherSnapshot> {
  const { latitude, longitude } = WEATHER_LOCATION;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&forecast_days=7&timezone=Asia%2FKarachi`;
  const fallback = (): WeatherSnapshot => ({
    updatedAt: new Date().toISOString(),
    current: { temp: 29, text: describeWmo(1, locale), apparent: 30, humidity: 45, wind: 8, umbrella: false, outfit: computeOutfit(1, false, locale), highUv: false },
    days: [],
  });
  try {
    const res = await fetch(url, { cf: { cacheTtl: 1800 } as any });
    if (!res.ok) return fallback();
    const j = await res.json();
    const c = j.current;
    const d = j.daily;
    const highUv = (d.uv_index_max?.[0] ?? 0) >= 6;
    const current: WeatherCurrent = {
      temp: Math.round(c.temperature_2m),
      text: describeWmo(c.weather_code, locale),
      apparent: Math.round(c.apparent_temperature),
      humidity: Math.round(c.relative_humidity_2m),
      wind: Math.round(c.wind_speed_10m),
      umbrella: UMBRELLA_CODES.has(c.weather_code),
      outfit: computeOutfit(c.weather_code, highUv, locale),
      highUv,
    };
    const days: WeatherDay[] = (d.time ?? []).map((date: string, i: number) => {
      const code = d.weather_code[i];
      const prob = d.precipitation_probability_max?.[i] ?? 0;
      return {
        weekday: weekday(date, locale),
        text: describeWmo(code, locale),
        tmax: Math.round(d.temperature_2m_max[i]),
        tmin: Math.round(d.temperature_2m_min[i]),
        precipProb: prob,
        umbrella: UMBRELLA_CODES.has(code) || prob >= 50,
      };
    });
    return { updatedAt: new Date().toISOString(), current, days };
  } catch {
    return fallback();
  }
}
