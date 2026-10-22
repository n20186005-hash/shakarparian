(() => {
  const KEY='shakarparian-consent', DENY='shakarparian-analytics-denied', MARK='|shakarparian-analytics-denied|', ID='G-HXM22WWPKP';
  let immediateDeny=false;
  const en=document.documentElement.lang==='en';
  const messages=en?{
    on:'Analytics allowed and the choice saved.',
    off:'Analytics refused and the choice saved.',
    tab:'Analytics is off for this tab while its refusal marker remains available. The shared browser choice may differ and stored permission may remain in other tabs. Clear site data in browser settings to remove stored permission.',
    retained:'Analytics is off for this tab while its session or window refusal marker remains available, including same-site navigation and refresh. The shared choice could not be confirmed; stored permission may remain in other tabs. Clear site data in browser settings to remove stored permission.',
    page:'Analytics is off on this page. Refusal could not be retained for another page, and stored permission may remain in other tabs. Clear site data in browser settings before navigating or refreshing.'
  }:{
    on:'تجزیات کی اجازت اور انتخاب محفوظ ہو گیا۔',
    off:'تجزیات مسترد ہیں اور انتخاب محفوظ ہو گیا۔',
    tab:'اس ٹیب میں تجزیات انکار کا نشان دستیاب رہنے تک بند ہیں۔ براؤزر کا مشترک انتخاب مختلف ہو سکتا ہے اور دوسرے ٹیب میں محفوظ اجازت باقی رہ سکتی ہے۔ محفوظ اجازت ہٹانے کے لیے براؤزر کی ترتیبات میں سائٹ کا ڈیٹا مٹائیں۔',
    retained:'اس ٹیب میں سیشن یا ونڈو کے انکار کا نشان دستیاب رہنے تک تجزیات بند ہیں، اسی سائٹ پر صفحہ بدلنے اور ریفریش پر بھی۔ مشترک انتخاب کی تصدیق نہیں ہو سکی؛ دوسرے ٹیب میں محفوظ اجازت باقی رہ سکتی ہے۔ محفوظ اجازت ہٹانے کے لیے براؤزر کی ترتیبات میں سائٹ کا ڈیٹا مٹائیں۔',
    page:'اس صفحے پر تجزیات بند ہیں۔ اگلے صفحے کے لیے انکار برقرار نہیں رکھا جا سکا اور دوسرے ٹیب میں محفوظ اجازت باقی رہ سکتی ہے۔ آگے جانے یا ریفریش سے پہلے براؤزر کی ترتیبات میں سائٹ کا ڈیٹا مٹائیں۔'
  };
  function denialState(){
    try{return {denied:immediateDeny||sessionStorage.getItem(DENY)==='1'||window.name.includes(MARK),failed:false};}
    catch{return {denied:true,failed:true};}
  }
  function state(){
    const denial=denialState();
    try{
      const saved=JSON.parse(localStorage.getItem(KEY)||'null');
      // An old grant must not revive while permission storage cannot be verified.
      localStorage.removeItem(KEY+'-write-check');
      if(localStorage.getItem(KEY+'-write-check')!==null)throw Error('Storage unavailable');
      localStorage.setItem(KEY+'-write-check','1');
      if(localStorage.getItem(KEY+'-write-check')!=='1')throw Error('Storage unavailable');
      localStorage.removeItem(KEY+'-write-check');
      if(localStorage.getItem(KEY+'-write-check')!==null)throw Error('Storage unavailable');
      const valid=typeof saved?.analytics==='boolean';
      return {analytics:!denial.failed&&!denial.denied&&valid&&saved.analytics,preferences:!denial.failed&&!denial.denied&&valid?saved:null,denied:denial.denied,failed:denial.failed,decided:valid||denial.denied,storedFalse:valid&&saved.analytics===false};
    }catch{return {analytics:false,preferences:null,denied:denial.denied,failed:true,decided:false,storedFalse:false};}
  }
  function read(){return state().preferences;}
  function apply(grant){
    window['ga-disable-'+ID]=!grant;
    if(!grant){window.gtag?.('consent','update',{analytics_storage:'denied'});return;}
    window.dataLayer=window.dataLayer||[];
    window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
    if(!document.getElementById('shakarparian-ga4'))window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
    window.gtag('consent','update',{analytics_storage:'granted'});
    if(document.getElementById('shakarparian-ga4'))return;
    const script=document.createElement('script');script.id='shakarparian-ga4';script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+ID;document.head.appendChild(script);
    window.gtag('js',new Date());window.gtag('config',ID,{allow_google_signals:false,allow_ad_personalization_signals:false});
  }
  function retainDenial(){
    immediateDeny=true;apply(false);let retained=false;
    try{sessionStorage.setItem(DENY,'1');retained=sessionStorage.getItem(DENY)==='1';}catch{}
    try{window.name=window.name.split(MARK).join('')+MARK;retained=window.name.includes(MARK)||retained;}catch{}
    return retained;
  }
  function clearDenial(){
    try{
      sessionStorage.getItem(DENY);const name=window.name;
      sessionStorage.removeItem(DENY);
      if(sessionStorage.getItem(DENY)!==null)return false;
      window.name=name.split(MARK).join('');
      return !window.name.includes(MARK);
    }catch{return false;}
  }
  function rollbackGrant(){
    try{
      localStorage.setItem(KEY,JSON.stringify({analytics:false}));
      if(JSON.parse(localStorage.getItem(KEY)||'null')?.analytics===false)return true;
    }catch{}
    try{
      localStorage.removeItem(KEY);
      return localStorage.getItem(KEY)===null;
    }catch{return false;}
  }
  function sync(message,current=state(),failedSave=false){
    apply(current.analytics);
    const checkbox=document.getElementById('analytics');
    if(checkbox)checkbox.checked=current.analytics;
    const text=message||(current.failed?messages.page:current.denied&&!current.storedFalse?messages.tab:current.decided?(current.analytics?messages.on:messages.off):'');
    const status=document.getElementById('cookie-status');if(status)status.textContent=text;
    const open=failedSave||!current.decided||current.failed||(current.denied&&!current.storedFalse);
    const banner=document.getElementById('cookie-banner');if(banner)banner.setAttribute('data-open',open?'true':'false');
    const bannerStatus=document.getElementById('cookie-banner-status');if(bannerStatus)bannerStatus.textContent=open?text:'';
    return current;
  }
  function save(analytics){
    analytics=analytics===true;let stored=false,retained=false;
    if(!analytics){
      retained=retainDenial();
      try{localStorage.setItem(KEY,JSON.stringify({analytics:false}));stored=JSON.parse(localStorage.getItem(KEY)||'null')?.analytics===false;}catch{}
    }else{
      try{
        if(state().failed||!clearDenial())throw Error('Choice unavailable');
        localStorage.setItem(KEY,JSON.stringify({analytics:true}));
        if(JSON.parse(localStorage.getItem(KEY)||'null')?.analytics!==true)throw Error('Choice not retained');
        immediateDeny=false;
        const current=state();if(current.failed||!current.analytics)throw Error('Choice unavailable');
        stored=true;
      }catch{
        rollbackGrant();
        retained=retainDenial();
      }
    }
    let current=state();
    if(stored&&analytics&&!current.analytics){
      rollbackGrant();
      retained=retainDenial();stored=false;current=state();
    }
    sync(stored?(current.analytics?messages.on:messages.off):(retained?messages.retained:messages.page),current,!stored);
    return stored;
  }
  window.shakarConsent={read,save};
  sync();
  const checkbox=document.getElementById('analytics');
  document.getElementById('cookies-essential')?.addEventListener('click',()=>save(false));
  document.getElementById('cookies-accept')?.addEventListener('click',()=>save(true));
  document.getElementById('save-preferences')?.addEventListener('click',()=>save(checkbox?.checked===true));
  document.getElementById('reject-all')?.addEventListener('click',()=>save(false));
  window.addEventListener('storage',event=>{if(event.key===KEY||event.key===null)sync();});
})();
