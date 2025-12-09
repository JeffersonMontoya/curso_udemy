<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const pokemons = ref([]);

const getData = async () => {
  try {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
    pokemons.value = data.data.results;
  } catch (error) {
    console.log("Error", error);
  }
};

getData();
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold text-center mb-6 text-indigo-600">
      Pokemones
    </h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="poke in pokemons"
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
