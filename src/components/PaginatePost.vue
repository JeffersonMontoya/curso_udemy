<script setup>
const emit = defineEmits(["next", "preview"]);
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      @click="emit('preview')"
      type="button"
      class="btn btn-outline-primary"
    >
      Preview
    </button>
    <button @click="emit('next')" type="button" class="btn btn-outline-primary">
      Next
    </button>
  </div>
</template>
