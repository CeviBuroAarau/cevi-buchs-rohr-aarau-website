import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FrontLayout from "../layouts/Front.vue";

const LazyRegularLayout = () => import("../layouts/Regular.vue");
const LazyInteressierte = () => import("../views/Interessierte.vue");
const LazySchnuppern = () => import("../views/Schnuppern.vue");
const LazyAktivitaeten = () => import("../views/Aktivitaeten.vue");
const LazyCeviSchweiz = () => import("../views/CeviSchweiz.vue");
const LazyStandort = () => import("../views/Standort.vue");
const LazyMedien = () => import("../views/Medien.vue");
const LazyCevianer = () => import("../views/Cevianer.vue");
const LazyAgenda = () => import("../views/Agenda.vue");
const LazyAlbum = () => import("../views/Album.vue");
const LazyLaedeli = () => import("../views/Laedeli.vue");
const LazyAusbildung = () => import("../views/Ausbildung.vue");
const LazyLeiterteam = () => import("../views/Leiterteam.vue");
const LazyKontakt = () => import("../views/Kontakt.vue");
const LazyVersion = () => import("../views/Version.vue");
const LazyNotFound = () => import("../views/NotFound.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: FrontLayout,
    name: "Home",
  },
  {
    path: "/interessierte",
    component: LazyRegularLayout,
    children: [
      {
        name: "Interessierte",
        path: "",
        component: LazyInteressierte,
      },
    ],
  },
  {
    path: "/interessierte/schnuppern",
    component: LazyRegularLayout,
    children: [
      {
        name: "Schnuppern",
        path: "",
        component: LazySchnuppern,
      },
    ],
  },
  {
    path: "/interessierte/aktivitaeten",
    component: LazyRegularLayout,
    children: [
      {
        name: "Aktivitäten",
        path: "",
        component: LazyAktivitaeten,
      },
    ],
  },
  {
    path: "/interessierte/cevi_schweiz",
    component: LazyRegularLayout,
    children: [
      {
        name: "Cevi Schweiz",
        path: "",
        component: LazyCeviSchweiz,
      },
    ],
  },
  {
    path: "/interessierte/standort",
    component: LazyRegularLayout,
    children: [
      {
        name: "Standort",
        path: "",
        component: LazyStandort,
      },
    ],
  },
  {
    path: "/interessierte/medien",
    component: LazyRegularLayout,
    children: [
      {
        name: "Medien",
        path: "",
        component: LazyMedien,
      },
    ],
  },
  {
    path: "/cevianer",
    component: LazyRegularLayout,
    children: [
      {
        name: "Cevianer",
        path: "",
        component: LazyCevianer,
      },
    ],
  },
  {
    path: "/cevianer/agenda",
    component: LazyRegularLayout,
    children: [
      {
        name: "Agenda",
        path: "",
        component: LazyAgenda,
      },
    ],
  },
  {
    path: "/cevianer/album",
    component: LazyRegularLayout,
    children: [
      {
        name: "Album",
        path: "",
        component: LazyAlbum,
      },
    ],
  },
  {
    path: "/cevianer/laedeli",
    component: LazyRegularLayout,
    children: [
      {
        name: "Lädeli",
        path: "",
        component: LazyLaedeli,
      },
    ],
  },
  {
    path: "/cevianer/ausbildung",
    component: LazyRegularLayout,
    children: [
      {
        name: "Ausbildung",
        path: "",
        component: LazyAusbildung,
      },
    ],
  },
  {
    path: "/cevianer/leiterteam",
    component: LazyRegularLayout,
    children: [
      {
        name: "Leiterteam",
        path: "",
        component: LazyLeiterteam,
      },
    ],
  },
  {
    path: "/kontakt",
    component: LazyRegularLayout,
    children: [
      {
        name: "Kontakt",
        path: "",
        component: LazyKontakt,
      },
    ],
  },
  {
    path: "/version",
    component: LazyRegularLayout,
    children: [
      {
        name: "Version",
        path: "",
        component: LazyVersion,
      },
    ],
  },
  {
    path: "*",
    component: LazyRegularLayout,
    children: [
      {
        name: "NOt Found",
        path: "",
        component: LazyNotFound,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
