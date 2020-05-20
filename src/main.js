import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import vuetify from './plugins/vuetify'
import { Icon } from 'vant';
import 'vant/lib/icon/local.css'
import 'vant/lib/index.css'
// import "layui-src/src/lay/modules/layer"
import "layui-src/dist/css/layui.css"

Vue.use(Icon);

Vue.config.productionTip = false
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://127.0.0.1:3000/api'
Vue.prototype.$http = axios

window.http = 'http://localhost:3000'
//window.FILEPATH = 'http://localhost:3000/api/org/audit/download?file='
//window.IMAGEPATH = 'http://localhost:3000/api/org/updateOrgInfo/call?file='
import "../public/layuiadmin/style/admin.css"
import "../public/layuiadmin/style/login.css"


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
import "./assets/js/login.js"
