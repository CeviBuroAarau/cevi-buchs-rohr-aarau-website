import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Interessierte from "../views/Interessierte.vue";
import FrontLayout from "../layouts/Front.vue";
import RegularLayout from "../layouts/Regular.vue";
import Schnuppern from "../views/Schnuppern.vue";
import Aktivitaeten from "../views/Aktivitaeten.vue";
import CeviSchweiz from "../views/CeviSchweiz.vue";
import Standort from "../views/Standort.vue";
import Cevianer from "../views/Cevianer.vue";
import Agenda from "../views/Agenda.vue";
import Album from "../views/Album.vue";
import Laedeli from "../views/Laedeli.vue";
import Ausbildung from "../views/Ausbildung.vue";
import Leiterteam from "../views/Leiterteam.vue";
import Kontakt from "../views/Kontakt.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: FrontLayout,
    name: "Home",
  },
  {
    path: "/interessierte",
    component: RegularLayout,
    children: [
      {
        name: "Interessierte",
        path: "",
        component: Interessierte,
      },
    ],
  },
  {
    path: "/interessierte/schnuppern",
    component: RegularLayout,
    children: [
      {
        name: "Schnuppern",
        path: "",
        component: Schnuppern,
      },
    ],
  },
  {
    path: "/interessierte/aktivitaeten",
    component: RegularLayout,
    children: [
      {
        name: "Aktivitäten",
        path: "",
        component: Aktivitaeten,
      },
    ],
  },
  {
    path: "/interessierte/cevi_schweiz",
    component: RegularLayout,
    children: [
      {
        name: "Cevi Schweiz",
        path: "",
        component: CeviSchweiz,
      },
    ],
  },
  {
    path: "/interessierte/standort",
    component: RegularLayout,
    children: [
      {
        name: "Standort",
        path: "",
        component: Standort,
      },
    ],
  },
  {
    path: "/cevianer",
    component: RegularLayout,
    children: [
      {
        name: "Cevianer",
        path: "",
        component: Cevianer,
      },
    ],
  },
  {
    path: "/cevianer/agenda",
    component: RegularLayout,
    children: [
      {
        name: "Agenda",
        path: "",
        component: Agenda,
      },
    ],
  },
  {
    path: "/cevianer/album",
    component: RegularLayout,
    children: [
      {
        name: "Album",
        path: "",
        component: Album,
      },
    ],
  },
  {
    path: "/cevianer/laedeli",
    component: RegularLayout,
    children: [
      {
        name: "Lädeli",
        path: "",
        component: Laedeli,
      },
    ],
  },
  {
    path: "/cevianer/ausbildung",
    component: RegularLayout,
    children: [
      {
        name: "Ausbildung",
        path: "",
        component: Ausbildung,
      },
    ],
  },
  {
    path: "/cevianer/leiterteam",
    component: RegularLayout,
    children: [
      {
        name: "Leiterteam",
        path: "",
        component: Leiterteam,
      },
    ],
  },
  {
    path: "/kontakt",
    component: RegularLayout,
    children: [
      {
        name: "Kontakt",
        path: "",
        component: Kontakt,
      },
    ],
  },
  { path: "*", component: NotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
