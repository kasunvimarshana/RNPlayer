export const fallback = "en";

export const supportedLocales = {
    en: {
        name: "English",
        translationFileLoader: () => require('../Lang/en.json'),
        // en is default locale in Moment
        //momentLocaleLoader: () => import('moment/locale/en'),
        momentLocaleLoader: () => Promise.resolve(),
    }
};

export const defaultNamespace = "common";

export const namespaces = [
    "common",
    "DatePickerAndroid",
];