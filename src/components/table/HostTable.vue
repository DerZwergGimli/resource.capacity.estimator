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
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        <tr v-for="host in hosts" :key="host">
          <th>{{ host.id }}</th>
          <th>
            <input
              class="input input-bordered w-full max-w-xs"
              type="text"
              :value="host.name"
              @input="(event) => (host.name = event.target.value)"
            />
          </th>
          <th>
            <input
              class="input input-bordered w-full max-w-xs"
              type="text"
              :value="host.manufacturer"
              @input="(event) => (host.manufacturer = event.target.value)"
            />
          </th>
          <th>
            <div>{{ host.cpu.sockets }}</div>
            <div>{{ host.cpu.cores }}</div>
          </th>
          <th>
            <div>{{ host.ram.slots }}</div>
            <div>{{ host.ram.size }}</div>
          </th>
          <th>
            <div>{{ host.storage.amount }}</div>
            <div>{{ host.storage.size }}</div>
          </th>
          <th>
            <input
              class="input input-bordered"
              type="number"
              :value="host.amount"
              @input="(event) => (host.amount = event.target.value)"
            />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { AppDataHosts } from "@/js/types/data-types";
defineProps({
  hosts: {
    type: Array as PropType<AppDataHosts[]>,
    default: null,
  },
});
</script>
