import Vue from 'vue'
import App from './App.vue'
import { CollapsePlugin, ToastPlugin, TablePlugin,} from 'bootstrap-vue'
import router from './app-router'
import VueMobileDetection from 'vue-mobile-detection'

Vue.config.productionTip = false

Vue.use(CollapsePlugin)
Vue.use(ToastPlugin)
Vue.use(TablePlugin)
Vue.use(VueMobileDetection)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
