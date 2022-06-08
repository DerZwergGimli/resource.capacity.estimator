<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Assignment</h1>
    </div>
  </div>
  <DragDropArea class="m-4"></DragDropArea>
</template>

<script setup lang="ts">
import { defineComponent, onMounted } from "vue";
import DragDropArea from "@/components/special/DragDropArea.vue";

import { dataStore } from "@/store/DataStore";
const data = dataStore();

defineComponent({ DragDropArea });

onMounted(async () => {
  await data.check_init();

  console.log(data.assignments.filter((a) => a.vm_id === 0).length);
});
</script>
