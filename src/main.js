import Vue from 'vue'
import App from './App.vue'
import axios from 'axios' //npm install axios
import 'bootstrap/dist/css/bootstrap.min.css' //npm install bootstrap
import 'v-slim-dialog/dist/v-slim-dialog.css'
import SlimDialog from 'v-slim-dialog'

Vue.prototype.$http = axios;
Vue.config.productionTip = false
Vue.use(SlimDialog)
new Vue({
  render: h => h(App),
}).$mount('#app')


