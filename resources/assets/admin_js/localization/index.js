import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './locales/en.json'
import ar from './locales/ar.json'
import fr from './locales/fr.json'

Vue.use(VueI18n);

// Ready translated locale messages
const languages = {
    en,
    ar,
    fr
};


// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    languages, // set locale messages
});

export default i18n