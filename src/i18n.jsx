import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// محتوى الترجمات
const resources = {
  en: {
    translation: {
      translate: "Translate",
      city: "Alexandria",
      temp_min: "Min",
      temp_max: "Max",
      weather_desc: "Weather",
      date_format: "{{day}} / {{month}} {{weekday}}"
    },
  },
  ar: {
    translation: {
      translate: "ترجمة",
      city: "الإسكندرية",
      temp_min: "الصغري",
      temp_max: "الكبري",
      weather_desc: "الطقس",
      date_format: "{{day}} / {{month}} {{weekday}}"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
