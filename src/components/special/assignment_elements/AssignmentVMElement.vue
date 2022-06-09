<template>
  <div class="flex flex-row space-x-2">
    <p class="text-sm">{{ name }}</p>
    <i
      @click="$emit('clk_remove_item', host_uuid)"
      class="btn btn-sm bi bi-trash"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  name: {
    type: String,
    default: "-NAME-",
  },
  host_uuid: {
    type: String,
    default: "none",
  },
});
</script>

<style scoped></style>
