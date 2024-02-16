import Vue from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import store from '../../vuex-basic/src/store.js/index.js';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
