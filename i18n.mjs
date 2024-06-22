import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

if (!i18n.isInitialized) {
  i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: true,
      ns: ['common'], 
      defaultNS: 'common',
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
        caches: ['cookie'],
      },
      react: {
        useSuspense: false,
      },
      load: 'languageOnly',
      supportedLngs: ['en', 'fr', 'es'],
      nonExplicitSupportedLngs: true,
    });
}

export default i18n;
