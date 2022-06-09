<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>VM Configuration</h1>
    </div>
    <VMTable class="m-4" :vms="data.vms"></VMTable>
    <div>
      <button class="btn" @click="clk_addVM()">Add VM</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VMTable from "@/components/table/VMTable.vue";

import { dataStore } from "@/store/DataStore";
import { defineComponent } from "vue";
const data = dataStore();

data.check_init();

defineComponent({ VMTable });

function clk_addVM() {
  data.vms.push({
    id: data.vms.length,
    uuid: "000",
    name: "new_vm",
    os: "none",
    amount: 0,
    vcpu: {
      min: 0,
      rec: 0,
      max: 0,
    },
    vram: {
      min: 0,
      rec: 0,
      max: 0,
    },
    vstorage: {
      min: 0,
      rec: 0,
      max: 0,
    },
  });
}
</script>
