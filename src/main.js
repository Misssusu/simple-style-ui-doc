import Vue from 'vue'
import App from './App.vue'
import SUI from 'simple-style-ui'
import 'simple-style-ui/dist/simple-style-ui.css'

Vue.use(SUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
