<template>
  <div class="flex flex-row space-x-2">
    <i
      :class="
        type === 'cpu'
          ? 'bi bi-cpu'
          : type === 'ram'
          ? 'bi bi-memory'
          : 'bi bi-device-hdd'
      "
    ></i>
    <div class="grid grid-cols-2 gap-x-1">
      <input
        class="input input-bordered input-xs w-full max-w-xs"
        type="number"
        :value="first_value"
        @input="(event) => $emit('changed_first', event.target.value)"
      />
      <p class="text-xs pt-1">
        {{ type === "cpu" ? "Sockets" : type === "ram" ? "Slots" : "Slots" }}
      </p>
      <input
        class="input input-bordered input-xs w-full max-w-xs"
        type="number"
        :value="second_value"
        @input="(event) => $emit('changed_second', event.target.value)"
      />
      <p class="text-xs pt-1">
        {{ type === "cpu" ? "Cores" : type === "ram" ? "GB" : "GB" }}
      </p>
    </div>
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
