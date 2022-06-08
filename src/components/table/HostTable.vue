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
        <tr v-for="host in hosts" :key="host">
          <th>{{ host.id }}</th>
          <th>{{ host.name }}</th>
          <th>{{ host.manufacturer }}</th>
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
          <th>{{ host.amount }}</th>
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
