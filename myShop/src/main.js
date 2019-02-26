// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入公共的muicss
import './libs/mui/css/mui.css'
import './styles/common.css'

// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
// 全局导入van-ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 导入axios
import axios from "axios";
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://www.litc.pro:9999/v1';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
