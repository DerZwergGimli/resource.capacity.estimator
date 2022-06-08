<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>CPU</th>
          <th>RAM</th>
          <th>Storage</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        <tr v-for="vm in vms" :key="vm">
          <th>{{ vm.id }}</th>
          <th>{{ vm.name }}</th>
          <th>{{ vm.os }}</th>
          <th>
            <VMResources
              :min="vm.vcpu.min"
              :rec="vm.vcpu.rec"
              :max="vm.vcpu.max"
            ></VMResources>
          </th>
          <th>
            <VMResources
              :min="vm.vram.min"
              :rec="vm.vram.rec"
              :max="vm.vram.max"
            ></VMResources>
          </th>
          <th>
            <VMResources
              :min="vm.vstorage.min"
              :rec="vm.vstorage.rec"
              :max="vm.vstorage.max"
            ></VMResources>
          </th>
          <th>{{ vm.amount }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { AppDataVms } from "@/js/types/data-types";
import VMResources from "@/components/table/table_elements/VMResources.vue";
defineProps({
  vms: {
    type: Array as PropType<AppDataVms[]>,
    default: null,
  },
});
</script>
