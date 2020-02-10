import Vue from "vue";
import App from "./App.vue";

import "@/style/index.less";
import Xch from "@/components";
Vue.use(Xch);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
