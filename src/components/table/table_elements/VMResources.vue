<template>
  <div class="">
    <div class="flex flex-row space-x-2">
      <div>Min:</div>
      <div>
        <input
          class="input input-bordered input-xs w-full max-w-xs"
          type="number"
          :value="min"
          @input="(event) => $emit('changed_min', event.target.value)"
        />
      </div>
    </div>
    <div class="flex flex-row space-x-2">
      <div>Rec:</div>
      <input
        class="input input-bordered input-xs w-full max-w-xs"
        type="number"
        :value="rec"
        @input="(event) => $emit('changed_rec', event.target.value)"
      />
    </div>
    <div class="flex flex-row space-x-2">
      <div>Max:</div>
      <input
        class="input input-bordered input-xs w-full max-w-xs"
        type="number"
        :value="max"
        @input="(event) => $emit('changed_max', event.target.value)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  min: {
    type: Number,
    default: 0,
  },
  rec: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 0,
  },
});
</script>
