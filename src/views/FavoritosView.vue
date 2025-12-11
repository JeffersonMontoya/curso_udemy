<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";

import {RouterLink} from 'vue-router'


const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { remove } = useFavoritos;
</script>

<template>
  <div class="favoritos-container">
    <h1 class="title">Favoritos</h1>

    <p v-if="favoritos.length === 0" class="empty">
      Sin favoritos
    </p>

    <button>Volver</button>

    <ul class="favoritos-list">
      <li v-for="poke in favoritos" :key="poke.id" class="favorito-item">
        <div class="poke-name">
          {{ poke.name }}
        </div>

        <button @click="remove(poke.id)" class="btn-delete">
          Eliminar
        </button>

       <router-link class="btn-info" :to="`/pokemon/${poke.name}`" >
        Más información
      </router-link>

      
      </li>
    </ul>
  </div>
</template>

<style scoped>
.favoritos-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
}


.title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  color: #4f46e5;
  margin-bottom: 20px;
}


.empty {
  text-align: center;
  font-size: 1.1rem;
  color: #666;
}


.favoritos-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}


.favorito-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  padding: 16px 20px;
  border-radius: 14px;
  margin-bottom: 15px;

  font-size: 1.1rem;
  color: #333;
  font-weight: 600;

  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  transition: transform .2s ease, box-shadow .2s ease;
}

.favorito-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}


.poke-name {
  font-size: 1.2rem;
  text-transform: capitalize;
}


.btn-delete {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: #fff;

  padding: 8px 14px;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: bold;

  cursor: pointer;

  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: background .2s ease, transform .2s ease;
}

.btn-delete:hover {
  background: linear-gradient(135deg, #dc2626, #b91c1c);
  transform: scale(1.05);
}

.btn-delete:active {
  transform: scale(0.95);
}


.btn-info {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;

  padding: 8px 14px;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;

  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: background .2s ease, transform .2s ease, opacity .2s ease;
}

.btn-info:hover {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  transform: scale(1.05);
  opacity: 0.95;
}

.btn-info:active {
  transform: scale(0.95);
}

</style>
