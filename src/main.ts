import { createApp } from 'vue'
import '../src/styles/style.css'
import router from './router/index'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

