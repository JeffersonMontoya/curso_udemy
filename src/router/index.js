
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import('../views/PokemonView.vue')
  },
  {
    path: "/pokemon/:name",
    name: "poke",
    component: () => import('../views/PokeView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
  


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
