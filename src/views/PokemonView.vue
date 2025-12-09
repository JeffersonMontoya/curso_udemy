<script setup>
import axios  from "axios";
import { ref } from "vue";
import { RouterLink } from "vue-router";


const pokemons = ref([]);

const getData = async () => {
  try {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const res = data.data.results
    pokemons.value = res
  } catch (error) {
    console.log("Error", error);
  }
};

getData()

</script>

<template>
  <h1>Pokemones</h1>
  <p v-for="poke in pokemons" :key="poke.name">
    <RouterLink :to="`/pokemon/${poke.name}`">
  {{ poke.name }}
</RouterLink>

    
  </p>
</template>
