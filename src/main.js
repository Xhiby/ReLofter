import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Global from './components/Global'

Vue.config.productionTip = false
Vue.prototype.Global = Global

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')