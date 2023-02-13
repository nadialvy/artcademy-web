import { createRouter, createWebHistory } from "vue-router";

import Splash from "../views/Splash.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;