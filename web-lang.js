// Robust web language switching
document.addEventListener('DOMContentLoaded', function() {
  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

  const webLangSelect = qs('#web-language');
  const formLangSelect = qs('#form-language');
  const navLinks = qsa('.nav-menu li a');
  const heroTitle = qs('.hero-content h2');
  const heroSubtitle = qs('.hero-content .subtitle');
  const heroDate = qs('.hero-content .date');
  const heroBtn = qs('#show-form');
  const formHeading = qs('.form-heading');
  const footerLinks = qsa('.footer-links a');
  const footerCopy = qs('.footer-copy');
  const submitBtn = qs('.submit-btn');
  const searchBar = qs('.search-bar');

  const uiText = {
    en: {
      home: 'Home', myFarm: 'My farm', todo: 'To-Do List', trend: 'Local Trend', feedback: 'Feedback',
      heroTitle: 'AgroKheti', heroSubtitle: 'by PSA Content Desk', heroDate: 'September 15, 2025', heroBtn: 'Helping Farmes to build better',
      formHeading: 'Enter the Form Detail', footerLinks: ['Home','Schemes','Market Prices','Contact'], footerCopy: '© 2025 AgroKheti. All rights reserved.', submit: 'Submit', searchPlaceholder: 'Search...'
    },
    hi: {
      home: 'होम', myFarm: 'मेरा खेत', todo: 'कार्य सूची', trend: 'स्थानीय प्रवृत्ति', feedback: 'प्रतिक्रिया',
      heroTitle: 'एग्रोखेती', heroSubtitle: 'पीएसए कंटेंट डेस्क द्वारा', heroDate: '15 सितम्बर 2025', heroBtn: 'किसानों की मदद के लिए',
      formHeading: 'फॉर्म विवरण दर्ज करें', footerLinks: ['होम','योजनाएँ','बाजार भाव','संपर्क'], footerCopy: '© 2025 एग्रोखेती। सर्वाधिकार सुरक्षित।', submit: 'जमा करें', searchPlaceholder: 'खोजें...'
    },
    pa: {
      home: 'ਹੋਮ', myFarm: 'ਮੇਰਾ ਖੇਤ', todo: 'ਟੂ-ਡੂ ਲਿਸਟ', trend: 'ਸਥਾਨਕ ਰੁਝਾਨ', feedback: 'ਫੀਡਬੈਕ',
      heroTitle: 'ਐਗਰੋਖੇਤੀ', heroSubtitle: 'PSA ਸਮੱਗਰੀ ਡੈਸਕ ਦੁਆਰਾ', heroDate: '15 ਸਤੰਬਰ 2025', heroBtn: 'ਕਿਸਾਨਾਂ ਦੀ ਮਦਦ ਲਈ',
      formHeading: 'ਫਾਰਮ ਵੇਰਵਾ ਦਰਜ ਕਰੋ', footerLinks: ['ਹੋਮ','ਯੋਜਨਾਵਾਂ','ਬਾਜ਼ਾਰ ਕਿੰਮਤ','ਸੰਪਰਕ'], footerCopy: '© 2025 ਐਗਰੋਖੇਤੀ। ਸਭ ਅਧਿਕਾਰ ਰਾਖਵੇਂ।', submit: 'ਜਮ੍ਹਾਂ ਕਰੋ', searchPlaceholder: 'ਖੋਜੋ...'
    }
    // add more languages here if needed
  };

  function applyUIText(lang) {
    const t = uiText[lang] || uiText.en;
    if (navLinks[0]) navLinks[0].textContent = t.home;
    if (navLinks[1]) navLinks[1].textContent = t.myFarm;
    if (navLinks[2]) navLinks[2].textContent = t.todo;
    if (navLinks[3]) navLinks[3].textContent = t.trend;
    if (navLinks[4]) navLinks[4].textContent = t.feedback;
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroDate) heroDate.textContent = t.heroDate;
    if (heroBtn) heroBtn.textContent = t.heroBtn;
    if (formHeading) formHeading.textContent = t.formHeading;
    if (footerLinks.length && t.footerLinks) footerLinks.forEach((el,i)=> el.textContent = t.footerLinks[i] || el.textContent);
    if (footerCopy) footerCopy.textContent = t.footerCopy;
    if (submitBtn) submitBtn.textContent = t.submit;
    if (searchBar) searchBar.placeholder = t.searchPlaceholder;
    document.documentElement.lang = lang;
  }

  function syncAll(lang) {
    applyUIText(lang);
    if (formLangSelect && formLangSelect.value !== lang) {
      formLangSelect.value = lang;
      if (typeof window.updateFormLabels === 'function') window.updateFormLabels(lang);
      if (typeof window.updateFormOptions === 'function') window.updateFormOptions(lang);
    }
    if (webLangSelect && webLangSelect.value !== lang) webLangSelect.value = lang;
  }

  if (webLangSelect) webLangSelect.addEventListener('change', function(){ syncAll(this.value); });
  if (formLangSelect) formLangSelect.addEventListener('change', function(){ syncAll(this.value); });

  // initial sync (use webLangSelect value if present)
  const initial = (webLangSelect && webLangSelect.value) || (formLangSelect && formLangSelect.value) || 'en';
  syncAll(initial);
});