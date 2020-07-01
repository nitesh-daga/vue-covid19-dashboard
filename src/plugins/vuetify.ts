import Vue from "vue";
import Vuetify, { VFlex, VLayout, VContainer, VImg, VApp, VAppBar, VBtn, VCol, VRow, VSpacer, VMain, VIcon } from "vuetify/lib";
// import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify, {
  components: { VFlex, VLayout, VContainer, VImg, VApp, VAppBar, VBtn, VCol, VRow, VSpacer, VMain, VIcon  },
  theme: {
    primary: "#ee44aa",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
  customProperties: true,
  iconfont: "md",
});
const opts = {};

export default new Vuetify(opts);
