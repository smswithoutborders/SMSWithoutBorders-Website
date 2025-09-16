import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["en", "es", "fr", "fa"],
		fallbackLng: "en",
		detection: {
			order: ["localStorage", "navigator", "cookie", "queryString"],
			caches: ["localStorage", "cookie"],
			lookupLocalStorage: "i18nextLng",
		},
		backend: {
			loadPath: "/locales/{{lng}}/translation.json",
		},
		react: {
			useSuspense: true,
		},
	});

export default i18n;
