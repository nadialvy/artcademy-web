import { createRouter, createWebHistory } from "vue-router";

import Splash from "../views/Splash.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;