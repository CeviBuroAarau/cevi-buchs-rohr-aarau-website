import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FrontLayout from "../layouts/Regular.vue";
import RegularLayout from "../layouts/Regular.vue";

const LazyInteressierte = () => import('../views/Interessierte.vue');
const LazySchnuppern = () => import('../views/Schnuppern.vue');
const LazyAktivitaeten = () => import('../views/Aktivitaeten.vue');
const LazyCeviSchweiz = () => import('../views/CeviSchweiz.vue');
const LazyStandort = () => import('../views/Standort.vue');
const LazyCevianer = () => import('../views/Cevianer.vue');
const LazyAgenda = () => import('../views/Agenda.vue');
const LazyAlbum = () => import('../views/Album.vue');
const LazyLaedeli = () => import('../views/Laedeli.vue');
const LazyAusbildung = () => import('../views/Ausbildung.vue');
const LazyLeiterteam = () => import('../views/Leiterteam.vue');
const LazyKontakt = () => import('../views/Kontakt.vue');
const LazyNotFound = () => import('../views/NotFound.vue');

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
        component: LazyInteressierte,
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
        component: LazySchnuppern,
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
        component: LazyAktivitaeten,
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
        component: LazyCeviSchweiz,
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
        component: LazyStandort,
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
        component: LazyCevianer,
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
        component: LazyAgenda,
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
        component: LazyAlbum,
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
        component: LazyLaedeli,
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
        component: LazyAusbildung,
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
        component: LazyLeiterteam,
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
        component: LazyKontakt,
      },
    ],
  },
  { path: "*", component: LazyNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
