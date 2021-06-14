import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import iview from 'iview'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iview)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
