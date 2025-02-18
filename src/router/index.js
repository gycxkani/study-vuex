import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/counterDemo",
    name: "counterDemo",
    component: () =>
      import(
        /* webpackChunkName: "base-demo" */ "../base-demo/App.vue"
      ),
  },
  {
    path: "/moduleDemo",
    name: "moduleDemo",
    component: () =>
      import(
        /* webpackChunkName: "base-demo" */ "../module-demo/App.vue"
      ),
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
  history: createWebHashHistory(),
  routes,
});

export default router;
