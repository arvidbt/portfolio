import { createRouter, createWebHistory } from "vue-router";
import DesktopView from "../views/DesktopView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  {
    path: "/",
    component: DesktopView,
  },
  {
    path: "/projects",
    component: ProjectView,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
