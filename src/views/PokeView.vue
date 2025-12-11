<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

import { useFavoritosStore } from "@/store/favoritos";

const route = useRoute();
const router = useRouter();

const useFavoritos = useFavoritosStore();
const { add , findPoke } = useFavoritos;

const { getData, data, loading, errorData } = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const back = () => {
  router.push("/pokemon");
};
</script>

<template>
  <p v-if="loading" class="loading">Cargando información...</p>

  <div class="alert-error" v-if="errorData">{{ errorData }}</div>

  <div v-if="data" class="pokemon-container">
    <div class="card">
      <div class="image-wrapper" v-if="data.sprites">
        <img class="poke-img" :src="data.sprites.front_default" alt="pokemon" />
      </div>

      <h1 class="title">Poke Name: {{ $route.params.name }}</h1>

      <div class="btn-group">
        <button @click="back" class="btn-action">Volver</button>
        <button :disabled="findPoke(data.name)" @click="add(data)" class="btn-action btn-fav">Agregar Favoritos</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.loading {
  text-align: center;
  margin-top: 40px;
  font-size: 1.2rem;
  color: #555;
}

/* ERROR */
.alert-error {
  background: #fee2e2;
  color: #b91c1c;
  border: 1px solid #fca5a5;
  width: max-content;
  padding: 12px 18px;
  margin: 20px auto;
  border-radius: 10px;
  font-weight: bold;
}

/* CONTENEDOR GENERAL */
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #e0e7ff, #f5f3ff);
}

/* TARJETA */
.card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  padding: 3rem 2.5rem;
  width: 450px;
  border-radius: 25px;

  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.17);
  text-align: center;

  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.2);
}

/* IMAGEN */
.image-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
}

.poke-img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0px 10px 16px rgba(0, 0, 0, 0.17));
}

/* TITULO */
.title {
  margin-bottom: 2rem;
  font-size: 2.3rem;
  font-weight: 800;
  color: #1e1e2f;
  text-transform: capitalize;
}

/* BOTONES */
.btn-group {
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-top: 20px;
}

.btn-action {
  padding: 0.55rem 1.2rem;
  min-width: 120px;

  background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
  color: #fff;

  border: none;
  border-radius: 12px;
  cursor: pointer;

  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.3px;

  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.18);
  transition: transform 0.22s ease, box-shadow 0.22s ease, opacity 0.22s ease;
}

.btn-action:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  opacity: 0.93;
}

.btn-action:active {
  transform: scale(0.96);
}

/* DIFERENCIAR BOTÓN DE FAVORITOS */
.btn-fav {
  background: linear-gradient(135deg, #f59e0b, #f97316, #ea580c);
}


/* ESTILO PARA BOTÓN DESACTIVADO */
.btn-action:disabled,
.btn-action[disabled] {
  opacity: 0.55;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
  filter: grayscale(40%);
}

</style>
