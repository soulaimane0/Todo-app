import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
const pinia = createPinia();

/* Fontawesome stuffs */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* Specific icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck, faX);

const app = createApp(App);
app.use(pinia);
app.component('VIcon', FontAwesomeIcon);
app.mount('#app');
