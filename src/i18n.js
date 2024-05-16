// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationDE from './translations/de.json';
import translationEN from './translations/en.json';

const resources = {
  de: { translation: translationDE },
  en: { translation: translationEN }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;