import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query'
import { createNotivue } from 'notivue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import 'notivue/notification.css' // Only needed if using built-in <Notification />
import 'notivue/animations.css' // Only needed if using default animations

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  },
}

const notivue = createNotivue({ position: 'top-right' })
const app = createApp(App)

app.use(router).use(VueQueryPlugin, vueQueryPluginOptions).use(notivue).mount('#app')
