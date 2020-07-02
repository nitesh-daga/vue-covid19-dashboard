import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./sass/main.scss";
import moment from "moment";

Vue.config.productionTip = false;
Vue.filter("formatDate", function(value: any) {
  if (value) {
    return moment(String(value)).format("DD MMM YYYY");
  }
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
