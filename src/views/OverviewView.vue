<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>Overview Configuration</h1>
      <div class="flex flex-row space-x-2"></div>
    </div>
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <div>Hello</div>
    </div>
  </div>
</template>

<script setup>
import { appStorage } from "@/store/AppStorage";

const storage = appStorage();
storage.init();
</script>

<script>
export default {
  name: "OverviewView.vue",
};
</script>

<style scoped></style>
