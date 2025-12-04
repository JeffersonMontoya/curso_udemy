<script setup>
import BlogPost from "./components/BlogPost.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
import { ref } from "vue";

const posts = ref([
  { title: "Post1", id: 1, body: "descripcion1" },
  { title: "Post2", id: 2, body: "descripcion2" },
  { title: "Post3", id: 3, body: "descripcion3" },
  { title: "Post4", id: 4 },
]);


const favorito = ref('')


const cambiarFavorito = (title) => {
  favorito.value = title
}
</script>

<template>
  <div class="container">
    <h1>App</h1>
    <h2>{{ favorito }}</h2>

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavorito = "cambiarFavorito"
    />
  </div>
</template>
