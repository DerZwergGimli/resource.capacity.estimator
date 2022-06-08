<template>
  <div class="">
    <div class="flex flex-row">
      <div>Min:</div>
      <div>{{ min }}</div>
    </div>
    <div class="flex flex-row">
      <div>Rec:</div>
      <div>{{ rec }}</div>
    </div>
    <div class="flex flex-row">
      <div>Max:</div>
      <div>{{ min }}</div>
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
