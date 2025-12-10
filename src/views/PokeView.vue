<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const route = useRoute();
const router = useRouter();

const { getData, data, loading , errorData} = useGetData();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

const back = () => {
  router.push("/pokemon");
};
</script>
<template>
  <p v-if="loading">Cargando informacion.....</p>
  <div class="m-3 alert alert-danger" v-if="errorData">{{ errorData }}</div>
  <div v-if="data" class="pokemon-container">
    <div class="card">
      <div class="image-wrapper" v-if="data.sprites">
        <img class="poke-img" :src="data.sprites.front_default" alt="" />
      </div>

      <h1 class="title">Poke Name: {{ $route.params.name }}</h1>

      <button @click="back" class="btn-back">Volver</button>
    </div>
  </div>
</template>

<style scoped>
.pokemon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(135deg, #e0e7ff, #f5f3ff);
  min-height: 100vh;
}

.card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 3rem 2.5rem;
  width: 450px;
  border-radius: 25px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.18);
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.8rem;
}

.poke-img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
}

.title {
  margin-bottom: 2rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: #1e1e2f;
}

.btn-back {
  padding: 0.9rem 1.9rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6, #3b82f6);
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn-back:hover {
  transform: scale(1.07);
  opacity: 0.9;
}
</style>
