import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import WeatherReport from "./components/WeatherReport.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/weatherdetails", component: WeatherReport },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
