import Vue from 'vue'
import App from '../../../my-cli/src/App.vue'
import router from '../../route-basic/src/router'

Vue.config.productionTip = false

new Vue ({
    router, 
    reader: h => h(App)
}).$mount('#app')