import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/home/home"),
  },
  {
    path: "/countrylist",
    name: "countrylist",
    component: () => import("../components/country-list/country-list")
  },
  {
    path: "/country/:id",
    name: "countrylist-details",
    component: () => import("../components/country-details/country-details")
  }
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
