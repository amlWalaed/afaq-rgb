import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import store from './store'
import i18n from './locales/i18n'
createApp(App).use(store).use(router).use(i18n).mount('#app')
