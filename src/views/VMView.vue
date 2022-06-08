<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>VM Configuration</h1>
    </div>
    <VMTable :vms="data.vms"></VMTable>
  </div>
</template>

<script setup lang="ts">
import VMTable from "@/components/table/VMTable.vue";

import { dataStore } from "@/store/DataStore";
import { defineComponent } from "vue";
const data = dataStore();

data.check_init();

defineComponent({ VMTable });
</script>
