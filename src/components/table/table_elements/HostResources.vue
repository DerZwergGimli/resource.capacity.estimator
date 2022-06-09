<template>
  <div>
    <input
      class="input input-primary input-bordered input-xs w-full max-w-xs"
      type="number"
      :value="first_value"
      @input="(event) => $emit('changed_first', event.target.value)"
    />
  </div>
  <div>
    <input
      class="input input-primary input-bordered input-xs w-full max-w-xs"
      type="number"
      :value="second_value"
      @input="(event) => $emit('changed_second', event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "none",
  },
  first_value: {
    type: Number,
    default: 0,
  },
  second_value: {
    type: Number,
    default: 0,
  },
});
</script>
