import { createWebHistory, createRouter } from "vue-router";
import BlogList from "./components/BlogList.vue";
import Detail from "./components/Detail.vue";

const routes = [
  {},
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/:404(.*)",
    component: BlogList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
