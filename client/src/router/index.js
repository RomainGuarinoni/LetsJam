import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Connect from "../components/Connect.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/salle",
    name: "Home",
    component: Home,
  },
  {
    path: "/connect",
    name: "Connect",
    component: Connect,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
