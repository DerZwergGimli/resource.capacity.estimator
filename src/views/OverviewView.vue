<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Overview</h1>
    </div>
    <div class="divider"></div>
    <div class="grid xl:grid-cols-2 gap-4 m-4">
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
