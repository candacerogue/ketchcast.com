import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'
// import { BootstrapVue } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
Vue.use(VueMq, {
  breakpoints: { 
    mobile: 450,
    laptop: 1024,
    desktop: Infinity,
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')