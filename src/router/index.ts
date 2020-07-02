import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/country-list/country-list")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/countrylist",
    name: "countrylist",
    component: () => import("../components/country-list/country-list"),
    // component: () => import("../components/CountryList.vue"),
  },
  {
    path: "/country/:id",
    name: "countrylist-details",
    component: () => import("../components/country-details/country-details")
    // component: () => import("../components/CountryListDetails.vue"),
  },
];

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
