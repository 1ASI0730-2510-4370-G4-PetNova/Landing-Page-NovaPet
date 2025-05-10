import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

const i18n = createI18n({
    locale: 'en', // Configura el idioma por defecto
    messages: {
        en,
        es
    }
})

createApp(App).use(i18n).mount('#app')
