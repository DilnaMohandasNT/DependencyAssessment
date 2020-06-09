import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {AsyncStorage} from 'react-native';

const STORAGE_KEY = '@APP:languageCode';
// creating a language detection plugin using expo
// http://i18next.com/docs/ownplugin/#languagedetector
const locale = i18n.language;
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (callback) => {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    const lng = savedDataJSON ? savedDataJSON : null;
    const selectLanguage = lng || locale;
    console.log('detect - selectLanguage:', selectLanguage);
    callback(selectLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },

    resources: {
      en: {
        home: {
          title: 'Welcome',
          introduction:
              'This text comes from i18next and is provided in english.',
        },
        page2: {
          title: 'Page 2',
          introduction: 'This text on page two.',
        },
        common: {
            welcome: 'Hope you enjoyed!!',
        },
      },
      de: {
        home: {
          title: 'Willkommen',
          introduction: 'Dieser Text ist von i18next und ist in deutsch.',
        },
        page2: {
          title: 'Seite 2',
          introduction: 'Text auf Seite 2',
        },
        common: {
          welcome: 'Hope you enjoyed!!',
        },
      },
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
