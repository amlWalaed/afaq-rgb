import AR from '@/locales/ar.json'
import EN from '@/locales/en.json'
import {createI18n} from 'vue-i18n'
let lang = "EN"
if(localStorage.getItem("lang")){
    lang = localStorage.getItem("lang")
}else{
    localStorage.setItem("lang", "EN")
}
const i18n =createI18n({
    locale:lang,
    messages:{
        AR,
        EN
    }
})
export default i18n