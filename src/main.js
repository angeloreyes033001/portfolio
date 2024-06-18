import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';

import Lara from './presets/lara'
import App from './App.vue'
import router from './router'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast';

const app = createApp(App)
app.use(PrimeVue,{
    unstyled: true,
    pt:Lara
})
app.use(ToastService)
app.use(createPinia())
app.component("InputText",InputText)
app.component("Button",Button)
app.component('Textarea',Textarea)
app.component('Toast',Toast)
app.use(router)
app.mount('#app')
