import './assets/main.css'
import './assets/index.css'
import router from "./router";
import { createApp, reactive } from 'vue'
import App from './App.vue'
import { globals } from "./stores/globals";

const app = createApp(App)
app.use(router);
const deepGlobals = reactive(globals);
app.config.globalProperties.$globals = deepGlobals;
app.mount('#app')
