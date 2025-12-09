<script setup>
const emit = defineEmits(["next", "preview"]);

defineProps(["inicio", "fin", "maxLength"]);
</script>

<template>
  <div class="nav-container">
    <button
      @click="emit('preview')"
      class="nav-btn"
      :disabled="inicio === 0"
    >
      ⬅ Preview
    </button>

    <button
      @click="emit('next')"
      class="nav-btn"
      :disabled="fin >= maxLength"
    >
      Next ➡
    </button>
  </div>
</template>

<style scoped>
.nav-container {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}

.nav-btn {
  background: #fff;
  border: 2px solid #4a90e2;
  padding: 10px 18px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #4a90e2;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  background: #4a90e2;
  color: white;
  transform: translateY(-2px);
}

.nav-btn:active {
  transform: scale(0.96);
}

.nav-btn:disabled {
  background: #e6e6e6;
  border-color: #cccccc;
  color: #9f9f9f;
  cursor: not-allowed;
  transform: none;
}
</style>
