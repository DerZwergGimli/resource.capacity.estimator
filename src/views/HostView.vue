<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Hosts Configuration</h1>
    </div>
    <HostTable :hosts="data.hosts"></HostTable>
  </div>
</template>

<script setup lang="ts">
import HostTable from "@/components/table/HostTable.vue";
import { dataStore } from "@/store/DataStore";
import { defineComponent } from "vue";
const data = dataStore();

data.check_init();

defineComponent({ HostTable });
</script>
