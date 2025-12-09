<script setup></script>

<template>
  <div class="loader-container">
    <div class="custom-spinner"></div>
    <p class="loading-text">Cargando...</p>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
}


.custom-spinner {
  width: 60px;
  height: 60px;
  border: 6px solid #e0e0e0;
  border-top-color: #4aa3ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a4a4a;
  animation: fade 1.5s ease-in-out infinite alternate;
}

/* Animación para el texto */
@keyframes fade {
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
</style>
