import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
import vueBus from "vue-bus";
Vue.use(vueBus);

axios.defaults.baseURL = "/api";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// 请求拦截器 可以进行 添加请求 的token值
axios.interceptors.request.use(
  function(config) {
    // 比如加token 值
    config.headers.Authorization = "token";
    console.log("这个是每个请求发出去之前,都会进行的函数,拦截请求");
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器 一般对返回的数据进行格式化的操作 nprogress 经行统一
axios.interceptors.response.use(
  function(response) {
    console.log("这个是每个请求发出去成功之后,都会进行的函数,拦截响应");
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
