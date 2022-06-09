<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>Hosts Configuration</h1>
      <div class="flex flex-row space-x-2">
        <ValueCard text="host" :value="data.hosts.length"></ValueCard>
        <ValueCard text="vm" :value="data.vms.length"></ValueCard>
        <ValueCard
          text="assignment"
          :value="data.assignments.length"
        ></ValueCard>
      </div>
    </div>
    <HostTable
      class="m-4"
      :hosts="data.hosts"
      @clk_remove_item="(host_id) => clk_removeItem(host_id)"
    ></HostTable>
    <div>
      <button class="btn" @click="clk_addHost()">Add Host</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { uuid } from "vue-uuid";
import HostTable from "@/components/table/HostTable.vue";
import { createToast } from "mosha-vue-toastify";
import { dataStore } from "@/store/DataStore";
import { defineComponent } from "vue";
import {
  AppDataHostsCpu,
  AppDataHostsRam,
  AppDataHostsStorage,
} from "@/js/types/data-types";
import ValueCard from "@/components/special/ValueCard.vue";
const data = dataStore();

data.check_init();

defineComponent({ HostTable });

function clk_addHost() {
  data.hosts.push({
    id: data.hosts.length,
    uuid: uuid.v4(),
    name: "new_host",
    manufacturer: "no-name",
    amount: 0,
    cpu: { sockets: 0, cores: 0 },
    ram: { slots: 0, size: 0 },
    storage: { amount: 0, size: 0 },
  });
  createToast("New Host added!", { type: "success" });
}

function clk_removeItem(host_uuid: string) {
  let item_to_remove = data.hosts.find((host) => host.uuid == host_uuid);
  data.hosts = data.hosts.filter((host) => {
    return host !== item_to_remove;
  });
  createToast("Host " + item_to_remove?.name + " removed!", {
    type: "success",
  });
}
</script>
