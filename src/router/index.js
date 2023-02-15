import { createRouter, createWebHistory } from "vue-router";

import Splash from "../views/Splash.vue";
import Dashboard from "../views/Dashboard.vue";
import Community from "../views/Community.vue";
import Profile from "../views/Profile.vue";
import Ecommerce from "../views/Ecommerce.vue";
import ListCourse from "../views/ListCourse.vue";

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
  {
    path: "/community",
    name: "Community",
    component: Community,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    component: Ecommerce,
  },
  {
    path: "/listcourse/:course_name",
    name: "ListCourse",
    component: ListCourse,
    props: true,
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;