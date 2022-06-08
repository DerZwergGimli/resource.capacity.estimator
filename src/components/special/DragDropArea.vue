<template>
  <div class="flex">
    <div
      class="grid flex-grow card bg-base-300 rounded-box place-items-center py-2"
    >
      <div v-for="vm in data.vms" :key="vm" class="flex flex-col space-y-1">
        <span v-for="n in vm.amount" :key="n" class="badge">
          {{ vm.name }}</span
        >
      </div>
    </div>
    <div class="divider divider-horizontal text-center">
      drag<br />
      &<br />
      drop
    </div>
    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center">
      <div v-for="host in data.hosts" :key="host">
        <span class="badge bg-secondary"> {{ host.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStore } from "@/store/DataStore";
const data = dataStore();

data.check_init();
console.log(data.vms);
</script>

<style scoped></style>
