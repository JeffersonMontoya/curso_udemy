<script setup>
const props = defineProps({
  title: String,
  id: Number,
  body: {
    type: String,
    default: "Sin descripción",
  },
});

const emit = defineEmits(["select-favorite"]);

const marcarFavorito = () => {
  emit("select-favorite", props.title);
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ id }} - {{ title }}</h5>
      <p class="card-text">{{ body }}</p>

      <button @click="marcarFavorito" class="btn-fav">
        ❤️ Agregar a favoritos
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: #ffffff;
  border-radius: 14px;
  padding: 22px;
  margin: 15px 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #e5e5e5;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.card-text {
  color: #555;
  line-height: 1.5;
  margin-bottom: 15px;
}

.btn-fav {
  background: linear-gradient(135deg, #ff6b81, #ff4757);
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
}

.btn-fav:hover {
  background: linear-gradient(135deg, #ff4757, #ff6b81);
  transform: scale(1.04);
}

.btn-fav:active {
  transform: scale(0.98);
}
</style>
