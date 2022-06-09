<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Hosts Configuration</h1>
    </div>
    <HostTable class="m-4" :hosts="data.hosts"></HostTable>
    <div>
      <button class="btn" @click="clk_addHost()">Add Host</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import HostTable from "@/components/table/HostTable.vue";
import { dataStore } from "@/store/DataStore";
import { defineComponent } from "vue";
import {
  AppDataHostsCpu,
  AppDataHostsRam,
  AppDataHostsStorage,
} from "@/js/types/data-types";
const data = dataStore();

data.check_init();

defineComponent({ HostTable });

function clk_addHost() {
  data.hosts.push({
    id: data.hosts.length,
    uuid: "000",
    name: "new_host",
    manufacturer: "no-name",
    amount: 0,
    cpu: { sockets: 0, cores: 0 },
    ram: { slots: 0, size: 0 },
    storage: { amount: 0, size: 0 },
  });
}
</script>
