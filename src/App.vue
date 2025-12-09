<script setup>
import BlogPost from "./components/BlogPost.vue";
import { ref , onMounted } from "vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref("");

const favoritoTitle = ref("");
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);

const loading = ref(false);

const next = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};

const preview = () => {
  inicio.value = inicio.value - postXpage;
  fin.value = fin.value - postXpage;
};

onMounted(async () => {
  loading.value = true
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
});

const setFavorite = (title) => {
  favoritoTitle.value = title;
};

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     posts.value = data;
//   })
//   .catch((e) => console.error(e))
//   .finally(() => {
//     setTimeout(() => {
//       loading.value = false;
//     }, 2000);
//   });
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
