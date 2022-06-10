import { createRouter, createWebHistory } from "vue-router";
import DesktopView from "../views/DesktopView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DesktopView,
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import("../components/SkillsPage.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
