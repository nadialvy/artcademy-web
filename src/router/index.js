import { createRouter, createWebHistory } from "vue-router";

import Splash from "../views/Splash.vue";
import Dashboard from "../views/Dashboard.vue";
import Community from "../views/Community.vue";
import Profile from "../views/Profile.vue";
import Ecommerce from "../views/Ecommerce.vue";
import ListCourse from "../views/ListCourse.vue";
import CourseDetail from "../views/CourseDetail.vue";
import Login from "../views/Login.vue";
import TakeClass from "../views/TakeClass.vue";
import Level from "../views/Level.vue";
import DetailItem from "../views/DetailItem.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: Splash,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
    path: "/ecommerce/detail/:product_type/:item_name/:item_id",
    name: "DetailItem",
    component: DetailItem,
  },
  {
    path: "/listcourse/:course_category",
    name: "ListCourse",
    component: ListCourse,
    props: true,
  },
  {
    path: "/listcourse/:course_category/:id",
    name: "CourseDetail",
    component: CourseDetail,
    props: true,
  },
  {
    path: "/takeclass",
    name: "TakeClass",
    component: TakeClass,
  },
  {
    path: "/level",
    name: "Level",
    component: Level,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;