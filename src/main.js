import { createApp } from 'vue';
import App from "./App.vue";
import store from './store';
import router from './router';
import './assets/global.css';
import VueMobileDetection from "vue-mobile-detection";


createApp(App).use(VueMobileDetection).use(store).use(router).mount('#app')
