import Vue from 'vue'
import App from './App.vue'
import TwitterFeed from "vuejs-twitter-feed";
import JohnSlick from "./components/JohnSlick";

Vue.config.productionTip = false
Vue.use(TwitterFeed);
Vue.component('JohnSlick', JohnSlick);

new Vue({
  render: h => h(App),
}).$mount('#app')
