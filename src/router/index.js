
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import('../views/PokemonView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
