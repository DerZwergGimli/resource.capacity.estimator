<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>Overview Configuration</h1>
      <div class="flex flex-row space-x-2"></div>
    </div>
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <div v-for="assignment in storage.assignmentsList" :key="assignment">
        <OverviewCard :assignment="assignment"></OverviewCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appStorage } from "@/store/AppStorage";
import OverviewCard from "@/components/special/OverviewCard.vue";
import { defineComponent } from "@vue/runtime-core";

defineComponent({
  OverviewCard,
});

const storage = appStorage();
storage.init();
</script>

<script>
export default {
  components: { OverviewCard },
  name: "OverviewView.vue",
};
</script>

<style scoped></style>
