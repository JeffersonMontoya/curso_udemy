<script setup>
const emit = defineEmits(["next", "preview"]);


defineProps(["inicio", "fin", "maxLength"]);

</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
      @click="emit('preview')"
      type="button"
      class="btn btn-outline-primary"
      :disabled="inicio === 0 "
    >
    Preview
    </button>
    <button
     @click="emit('next')" 
     type="button"
      class="btn btn-outline-primary "
      :disabled="fin >= maxLength"
      
      >
      Next
    </button>
  </div>
</template>
