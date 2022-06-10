<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>VM Configuration</h1>
      <div class="flex flex-row space-x-2">
        <ValueCard text="host" :value="data.hosts.length"></ValueCard>
        <ValueCard text="vm" :value="data.vms.length"></ValueCard>
        <ValueCard
          text="assignment"
          :value="data.assignments.length"
        ></ValueCard>
      </div>
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
import { createToast } from "mosha-vue-toastify";
import { dataStore } from "@/store/DataStore";
import { defineComponent, PropType } from "vue";
import ValueCard from "@/components/special/ValueCard.vue";
const data = dataStore();

data.check_init();

defineComponent({ VMTable });

function clk_addVM() {
  data.vms.push({
    id: data.vms.length,
    uuid: uuid.v4(),
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
  createToast("New VM added!", { type: "success" });
}

function clk_removeItem(vm_uuid: string) {
  let item_to_remove = data.vms.find((vm) => vm.uuid == vm_uuid);
  data.vms = data.vms.filter((vm) => {
    return vm !== item_to_remove;
  });
  createToast("VM " + item_to_remove?.name + " removed!", {
    type: "success",
  });
}
</script>
