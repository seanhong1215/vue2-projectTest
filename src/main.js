import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
  
Vue.use(ElementUI)
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
});
