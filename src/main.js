import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'
// import AuthService from './store/index'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000/api/'
const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    const {
      response: {
        status,
        data
      }
    } = err;

    if (status === 401 && data.error === "Requête non authentifiée !") {
      localStorage.clear()
    }
  }
)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//
// Vue.use(nav)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");