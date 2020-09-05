import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Interessierte from "../views/Interessierte.vue";
import Schnuppern from "../views/Schnuppern.vue";
import Aktivitaeten from "../views/Aktivitaeten.vue";
import CeviSchweiz from "../views/CeviSchweiz.vue";
import Standort from "../views/Standort.vue";
import Mitglieder from "../views/Mitglieder.vue";
import Agenda from "../views/Agenda.vue";
import Album from "../views/Album.vue";
import Laedeli from "../views/Laedeli.vue";
import Ausbildung from "../views/Ausbildung.vue";
import Leiterteam from "../views/Leiterteam.vue";
import Kontakt from "../views/Kontakt.vue";
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/interessierte",
    name: "Interessierte",
    component: Interessierte
  },
  {
    path: "/interessierte/schnuppern",
    name: "Schnuppern",
    component: Schnuppern
  },
  {
    path: "/interessierte/aktivitaeten",
    name: "Aktivitäten",
    component: Aktivitaeten
  },
  {
    path: "/interessierte/cevi_schweiz",
    name: "Cevi Schweiz",
    component: CeviSchweiz
  },
  {
    path: "/interessierte/standort",
    name: "Standort",
    component: Standort
  },
  {
    path: "/mitglieder",
    name: "Mitglieder",
    component: Mitglieder
  },
  {
    path: "/mitglieder/agenda",
    name: "Agenda",
    component: Agenda
  },
  {
    path: "/mitglieder/album",
    name: "Album",
    component: Album
  },
  {
    path: "/mitglieder/laedeli",
    name: "Lädeli",
    component: Laedeli
  },
  {
    path: "/mitglieder/ausbildung",
    name: "Ausbildung",
    component: Ausbildung
  },
  {
    path: "/mitglieder/leiterteam",
    name: "Leiterteam",
    component: Leiterteam
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: Kontakt
  },
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
