<script setup>
import BlogPost from "./components/BlogPost.vue";
import { ref } from "vue";

const posts = ref([]);

const favoritoTitle = ref("");

const setFavorite = (title) => {
  favoritoTitle.value = title
}


fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => posts.value = data);
</script>

<template>
  <div class="container">
    <h1>App</h1>
    <h2>{{ favoritoTitle }}</h2>

    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @select-favorite="setFavorite"
    />
  </div>
</template>
