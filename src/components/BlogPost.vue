<script setup>
// defineProps(["title", "id", "body"]);

const props = defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: "Sin descripcion",
  },
});

const emit = defineEmits(['select-favorite'])


const marcarFavorito = () => {
  emit ("select-favorite" , props.title)
}

</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ id }} - {{ title }}</h5>
      <p>{{ body }}</p>
      <button
        @click="marcarFavorito"
        class="btn btn-outline-primary"
      >
        Favoritos
      </button>
    </div>
  </div>
</template>
