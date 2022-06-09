<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        <tr v-for="host in hosts" :key="host">
          <th>{{ host.id }}</th>
          <th>
            <input
              class="input input-primary input-bordered input-xs w-full max-w-xs"
              type="text"
              :value="host.name"
              @input="(event) => (host.name = event.target.value)"
            />
          </th>
          <th>
            <input
              class="input input-primary input-bordered input-xs w-full max-w-xs"
              type="text"
              :value="host.manufacturer"
              @input="(event) => (host.manufacturer = event.target.value)"
            />
          </th>
          <th>
            <HostResources
              :first_value="host.cpu.sockets"
              :second_value="host.cpu.cores"
              @changed_first="(value) => (host.cpu.sockets = value)"
              @changed_second="(value) => (host.cpu.cores = value)"
            ></HostResources>
          </th>
          <th>
            <HostResources
              :first_value="host.ram.slots"
              :second_value="host.ram.size"
              @changed_first="(value) => (host.ram.slots = value)"
              @changed_second="(value) => (host.ram.size = value)"
            ></HostResources>
          </th>
          <th>
            <HostResources
              :first_value="host.storage.amount"
              :second_value="host.storage.size"
              @changed_first="(value) => (host.storage.amount = value)"
              @changed_second="(value) => (host.storage.size = value)"
            ></HostResources>
          </th>
          <th>
            <input
              class="input input-primary input-bordered input-xs w-full max-w-xs"
              type="number"
              :value="host.amount"
              @input="(event) => (host.amount = event.target.value)"
            />
          </th>
          <th>
            <label
              class="btn btn-sm btn-circle text-2xs right-2 top-2"
              @click="$emit('clk_remove_item', host.id)"
              >x</label
            >
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { AppDataHosts } from "@/js/types/data-types";
import HostResources from "@/components/table/table_elements/HostResources.vue";

defineProps({
  hosts: {
    type: Array as PropType<AppDataHosts[]>,
    default: null,
  },
});
</script>
