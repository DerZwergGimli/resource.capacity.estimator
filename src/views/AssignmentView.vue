<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Assignment</h1>
    </div>
  </div>
  <DragDropArea class="m-4"></DragDropArea>
</template>

<script setup lang="ts"></script>
<script>
import DragDropArea from "@/components/special/DragDropArea";
export default {
  components: { DragDropArea },
};
</script>
