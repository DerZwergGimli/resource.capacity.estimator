import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/import",
    name: "import",
    component: () => import("@/views/ImportView.vue"),
  },
  {
    path: "/export",
    name: "export",
    component: () => import("@/views/ExportView.vue"),
  },
  {
    path: "/host",
    name: "host",
    component: () => import("@/views/HostView.vue"),
  },
  {
    path: "/vm",
    name: "vm",
    component: () => import("@/views/VMView.vue"),
  },
  {
    path: "/assign",
    name: "assign",
    component: () => import("@/views/AssignmentView.vue"),
  },
  {
    path: "/printout",
    name: "printout",
    component: () => import("@/views/PrintOutView.vue"),
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
