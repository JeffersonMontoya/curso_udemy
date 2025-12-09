<script setup>
import BlogPost from "../components/BlogPost.vue";
import { ref } from "vue";
import PaginatePost from "../components/PaginatePost.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";

const posts = ref([]);
const favoritoTitle = ref("");
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const loading = ref(true);

const next = () => {
  inicio.value += postXpage;
  fin.value += postXpage;
};

const preview = () => {
  inicio.value -= postXpage;
  fin.value -= postXpage;
};

const setFavorite = (title) => {
  favoritoTitle.value = title;
};

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }
};

fetchData();
</script>

<template>
  <LoadingSpinner v-if="loading" />

  <div class="container" v-else>
    <h1>App</h1>
    <h2>{{ favoritoTitle }}</h2>

    <PaginatePost
      @next="next"
      @preview="preview"
      :inicio="inicio"
      :fin="fin"
      :maxLength="posts.length"
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
