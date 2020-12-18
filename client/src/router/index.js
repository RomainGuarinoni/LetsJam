import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Musiciens from "../components/Musiciens";
import Profil from "../components/Profil";
import Modify from "../components/Modify";
import Stat from "../components/Stat";
import Salle from "../components/Salle";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/salle/:salle",
    name: "Salle",
    component: Salle,
    props: true,
  },
  {
    path: "/musiciens",
    name: "musiciens",
    component: Musiciens,
  },
  {
    path: "/profil",
    name: "profil",
    component: Profil,
    children: [
      {
        path: "statistiques",
        name: "Stat",
        component: Stat,
      },
      {
        path: "modifier",
        name: "Modify",
        component: Modify,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
