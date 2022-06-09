<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>VM Configuration</h1>
    </div>
    <VMTable
      class="m-4"
      :vms="data.vms"
      @clk_remove_item="(vm_id) => clk_removeItem(vm_id)"
    ></VMTable>
    <div>
      <button class="btn" @click="clk_addVM()">Add VM</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import VMTable from "@/components/table/VMTable.vue";
import { uuid } from "vue-uuid";
import { dataStore } from "@/store/DataStore";
import { defineComponent, PropType } from "vue";
import { AppDataVms } from "@/js/types/data-types";
const data = dataStore();

data.check_init();

defineComponent({ VMTable });

function clk_addVM() {
  data.vms.push({
    id: data.vms.length,
    uuid: uuid.v4,
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

function clk_removeItem(vm_id: number) {
  let item_to_remove = data.vms.find((vm) => vm.id == vm_id);
  data.vms = data.vms.filter((vm) => {
    return vm !== item_to_remove;
  });
}
</script>
