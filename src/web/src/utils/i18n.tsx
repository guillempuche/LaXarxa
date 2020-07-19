/**
 * Translation configurations of the app.
 *
 * We use i18next (https://www.i18next.com/)
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Namespaces for translations
import generalES from "../content/es/general.json";

i18n
  // .use(LanguageDetector)
  // Pass the i18n instance to the react-i18next components.
  .use(initReactI18next)
  .init({
    supportedLngs: ["es", "ar", "fr"],
    fallbackLng: "es",
    resources: {
      es: {
        general: generalES,
      },
      ar: {
        // general: generalAR,
      },
      fr: {
        // general: generalFR,
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
