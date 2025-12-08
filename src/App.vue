<script setup>
import BlogPost from "./components/BlogPost.vue";
import { ref } from "vue";
import PaginatePost from "./components/PaginatePost.vue";

const posts = ref([]);

const favoritoTitle = ref("");
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);

const next = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};


const preview = () => {
  inicio.value = inicio.value - postXpage;
  fin.value =fin.value - postXpage;
}


const setFavorite = (title) => {
  favoritoTitle.value = title;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => (posts.value = data));
</script>

<template>
  <div class="container">
    <h1>App</h1>
    <h2>{{ favoritoTitle }}</h2>
    <PaginatePost
    @next="next" 
    @preview="preview"
    class="mb-2" 
    />

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @select-favorite="setFavorite"
      class="mb-2"
    />
  </div>
</template>
