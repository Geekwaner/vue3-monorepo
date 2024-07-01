import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import W7UI from '@w7/ui';


const app = createApp(App);

app.use(W7UI)
app.mount('#app')
