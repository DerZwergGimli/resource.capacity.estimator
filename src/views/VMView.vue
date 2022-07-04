<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>VM Configuration</h1>
      <div class="flex flex-row space-x-2">
        <!-- TODO: Move this into a separate component  -->
        <!--        <ValueCard
          text="host"
          :value="calculate_total_hosts(store.hosts)"
        ></ValueCard>
        <ValueCard text="vm" :value="calculate_total_vms(data.vms)"></ValueCard>
        <ValueCard
          text="assignment"
          :value="data.assignments.length"
        ></ValueCard>-->
      </div>
    </div>
    <VMTable
      class="m-4"
      :vms="store.vmsList"
      @clk_remove_item="(vm_uuids) => store.remove_vm(vm_uuids)"
    ></VMTable>
    <div>
      <button class="btn" @click="clk_addVM()">Add VM</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { calculate_total_hosts, calculate_total_vms } from "@/js/calculator";
import VMTable from "@/components/table/VMTable.vue";
import { uuid } from "vue-uuid";
import { createToast } from "mosha-vue-toastify";
import { defineComponent, unref, watch } from "vue";
import ValueCard from "@/components/special/ValueCard.vue";
import { appStorage } from "@/store/AppStorage";
defineComponent({ VMTable });

const store = appStorage();
store.init();
//watch(store.vmsList, store.check_amount_uuids_length(unref(store.vmsList)));

function clk_addVM() {
  store.vmsList.push({
    id: store.vmsList.length,
    uuids: [uuid.v4()],
    name: "new_vm",
    os: "none",
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

/*function clk_removeItem(vm_uuid: string) {
  let item_to_remove = store.vmsList.find((vm) => vm.uuid == vm_uuid);
  store.vmsList = store.vmsList.filter((vm) => {
    return vm !== item_to_remove;
  });
  createToast("VM " + item_to_remove?.name + " removed!", {
    type: "success",
  });
}*/
</script>
