<script setup>
import { RouterLink } from "vue-router";

import { useGetData } from "@/composables/getData";

const { data, getData, loading , errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6 text-indigo-600">
      Pokemones
    </h1>
    <p v-if="loading">Cargando informacion.....</p>
    <div class="m-3 alert alert-danger" v-if="errorData">{{ errorData }}</div>

    <div
      v-if="data"
      class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div
        v-for="poke in data.results"
        :key="poke.name"
        class="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition-shadow"
      >
        <RouterLink
          :to="`/pokemon/${poke.name}`"
          class="block text-center text-lg font-semibold capitalize text-gray-700 hover:text-indigo-500 transition-colors"
        >
          {{ poke.name }}
        </RouterLink>
      </div>
    </div>


  </div>
</template>
