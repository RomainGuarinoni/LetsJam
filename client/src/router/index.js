import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Lavoisier from "../components/Lavoisier";
import Descartes from "../components/Descartes";
import Musiciens from "../components/Musiciens";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/lavoisier",
    name: "lavoisier",
    component: Lavoisier,
  },
  {
    path: "/descartes",
    name: "descartes",
    component: Descartes,
  },
  {
    path: "/musiciens",
    name: "musiciens",
    component: Musiciens,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
