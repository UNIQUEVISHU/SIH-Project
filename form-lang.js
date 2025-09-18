// Dropdown option translations for supported languages
const formOptions = {
  en: {
    location: ["Select Location", "Auto-detect GPS", "District A", "District B", "District C"],
    landSize: ["<1 acre", "1–5 acres", "5+ acres"],
    crop: ["Wheat", "Rice", "Maize", "Soybean"],
    soilType: ["Sandy", "Clay", "Loamy", "Black"],
    irrigation: ["Canal", "Tube Well", "Rainfed", "Pond"],
    sowing: ["Manual", "Machine"]
  },
  hi: {
    location: ["स्थान चुनें", "ऑटो-डिटेक्ट GPS", "जिला A", "जिला B", "जिला C"],
    landSize: ["<1 एकड़", "1–5 एकड़", "5+ एकड़"],
    crop: ["गेहूं", "चावल", "मक्का", "सोयाबीन"],
    soilType: ["रेतीली", "चिकनी", "दोमट", "काली"],
    irrigation: ["नहर", "ट्यूबवेल", "वर्षा आधारित", "तालाब"],
    sowing: ["हाथ से", "मशीन से"]
  },
  pa: {
    location: ["ਟਿਕਾਣਾ ਚੁਣੋ", "ਆਟੋ-ਡਿਟੈਕਟ GPS", "ਜ਼ਿਲਾ A", "ਜ਼ਿਲਾ B", "ਜ਼ਿਲਾ C"],
    landSize: ["<1 ਏਕੜ", "1–5 ਏਕੜ", "5+ ਏਕੜ"],
    crop: ["ਗੰਧੁਮ", "ਚੌਲ", "ਮੱਕੀ", "ਸੋਯਾਬੀਨ"],
    soilType: ["ਰੇਤਲੀ", "ਚਿਕਣੀ", "ਦੋਮਟ", "ਕਾਲੀ"],
    irrigation: ["ਨਹਿਰ", "ਟਿਊਬਵੈਲ", "ਵਰਖਾ ਆਧਾਰਿਤ", "ਪੋੰਡ"],
    sowing: ["ਹੱਥ ਨਾਲ", "ਮਸ਼ੀਨ ਨਾਲ"]
  },
  // ...add more languages as needed
};

const selects = {
  location: document.getElementById("location"),
  landSize: document.getElementById("land-size"),
  crop: document.getElementById("crop"),
  soilType: document.getElementById("soil-type"),
  irrigation: document.getElementById("irrigation"),
  sowing: document.getElementById("sowing")
};

function updateFormOptions(lang) {
  const opts = formOptions[lang] || formOptions.en;
  Object.keys(selects).forEach(key => {
    const select = selects[key];
    if (!select) return;
    // Remove all options
    while (select.options.length) select.remove(0);
    // Add translated options
    opts[key].forEach(val => {
      const option = document.createElement("option");
      option.textContent = val;
      select.appendChild(option);
    });
  });
}
// Form label translations for supported languages
const formLabels = {
  en: {
    location: "Location",
    landSize: "Land Size",
    crop: "Crop",
    soilType: "Soil Type",
    irrigation: "Irrigation Source",
    sowing: "Sowing Type"
  },
  hi: {
    location: "स्थान",
    landSize: "भूमि का आकार",
    crop: "फसल",
    soilType: "मिट्टी का प्रकार",
    irrigation: "सिंचाई स्रोत",
    sowing: "बुवाई प्रकार"
  },
  pa: {
    location: "ਟਿਕਾਣਾ",
    landSize: "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ",
    crop: "ਫ਼ਸਲ",
    soilType: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
    irrigation: "ਸਿੰਚਾਈ ਸਰੋਤ",
    sowing: "ਬਿਜਾਈ ਕਿਸਮ"
  },
  mr: {
    location: "स्थान",
    landSize: "जमिनीचा आकार",
    crop: "पिक",
    soilType: "मातीचा प्रकार",
    irrigation: "सिंचन स्रोत",
    sowing: "पेरणी प्रकार"
  },
  gu: {
    location: "સ્થાન",
    landSize: "જમીનનું કદ",
    crop: "પાક",
    soilType: "માટીનો પ્રકાર",
    irrigation: "સિંચાઈ સ્ત્રોત",
    sowing: "વાવણી પ્રકાર"
  },
  bn: {
    location: "অবস্থান",
    landSize: "জমির আকার",
    crop: "ফসল",
    soilType: "মাটির ধরন",
    irrigation: "সেচের উৎস",
    sowing: "বপনের ধরন"
  },
  ta: {
    location: "இடம்",
    landSize: "நில அளவு",
    crop: "பயிர்",
    soilType: "மண் வகை",
    irrigation: "நீர்ப்பாசன மூலம்",
    sowing: "விதைப்பு வகை"
  },
  te: {
    location: "స్థానం",
    landSize: "భూమి పరిమాణం",
    crop: "పంట",
    soilType: "మట్టి రకం",
    irrigation: "పారిశుధ్య మూలం",
    sowing: "విత్తన రకం"
  },
  kn: {
    location: "ಸ್ಥಳ",
    landSize: "ಭೂಮಿ ಗಾತ್ರ",
    crop: "ಬೆಳೆ",
    soilType: "ಮಣ್ಣು ಪ್ರಕಾರ",
    irrigation: "ನೀರಾವರಿ ಮೂಲ",
    sowing: "ಬಿತ್ತನೆ ಪ್ರಕಾರ"
  },
  ml: {
    location: "സ്ഥലം",
    landSize: "ഭൂമി വലിപ്പം",
    crop: "വിള",
    soilType: "മണ്ണിന്റെ തരം",
    irrigation: "നീരാവരി ഉറവിടം",
    sowing: "വിത്ത് തരം"
  },
  or: {
    location: "ଅବସ୍ଥାନ",
    landSize: "ଜମିର ଆକାର",
    crop: "ଫସଲ",
    soilType: "ମାଟିର ପ୍ରକାର",
    irrigation: "ସିଞ୍ଚନ ଉତ୍ସ",
    sowing: "ବିଜ ବିଜାଇ ପ୍ରକାର"
  },
  as: {
    location: "অৱস্থান",
    landSize: "মাটিৰ আকাৰ",
    crop: "শস্য",
    soilType: "মাটিৰ ধৰণ",
    irrigation: "সেচৰ উৎস",
    sowing: "বপন ধৰণ"
  },
  ur: {
    location: "مقام",
    landSize: "زمین کا سائز",
    crop: "فصل",
    soilType: "مٹی کی قسم",
    irrigation: "آبپاشی کا ذریعہ",
    sowing: "بوائی کی قسم"
  },
  sd: {
    location: "جاءِ",
    landSize: "زمين جو سائيز",
    crop: "فصل",
    soilType: "مٽي جو قسم",
    irrigation: "آبپاشي جو ذريعو",
    sowing: "پوک جو قسم"
  },
  sa: {
    location: "स्थानम्",
    landSize: "भूमेः आकारः",
    crop: "कृषिः",
    soilType: "मृत्तिका प्रकारः",
    irrigation: "सिंचन स्रोतः",
    sowing: "बीजन प्रकारः"
  },
  ks: {
    location: "جای",
    landSize: "زمین چھ سائز",
    crop: "فصل",
    soilType: "مٹی چھ قسم",
    irrigation: "آبپاشی چھ ذریعہ",
    sowing: "بوائی چھ قسم"
  },
  kok: {
    location: "स्थान",
    landSize: "भूमीचे आकार",
    crop: "पिक",
    soilType: "मातीचा प्रकार",
    irrigation: "सिंचन स्रोत",
    sowing: "पेरणी प्रकार"
  },
  mai: {
    location: "स्थान",
    landSize: "भूमि के आकार",
    crop: "फसल",
    soilType: "माटि के प्रकार",
    irrigation: "सिंचाई स्रोत",
    sowing: "बुआई प्रकार"
  },
  ne: {
    location: "स्थान",
    landSize: "जग्गाको आकार",
    crop: "बाली",
    soilType: "माटोको प्रकार",
    irrigation: "सिचाइ स्रोत",
    sowing: "बिउ छर्ने प्रकार"
  }
};

const formLangSelect = document.getElementById("form-language");
const labels = {
  location: document.querySelector("label[for='location']"),
  landSize: document.querySelector("label[for='land-size']"),
  crop: document.querySelector("label[for='crop']"),
  soilType: document.querySelector("label[for='soil-type']"),
  irrigation: document.querySelector("label[for='irrigation']"),
  sowing: document.querySelector("label[for='sowing']")
};

function updateFormLabels(lang) {
  const l = formLabels[lang] || formLabels.en;
  labels.location.textContent = l.location;
  labels.landSize.textContent = l.landSize;
  labels.crop.textContent = l.crop;
  labels.soilType.textContent = l.soilType;
  labels.irrigation.textContent = l.irrigation;
  labels.sowing.textContent = l.sowing;
}

if (formLangSelect) {
  formLangSelect.addEventListener("change", function() {
    updateFormLabels(this.value);
    updateFormOptions(this.value);
  });
  updateFormLabels(formLangSelect.value);
  updateFormOptions(formLangSelect.value);
}