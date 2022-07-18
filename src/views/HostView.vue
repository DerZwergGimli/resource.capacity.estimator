<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1 class="text-primary font-bold underline">Hosts Configuration</h1>
    </div>
    <HostTable
      class="m-4"
      :hosts="store.hostsList"
      @clk_remove_item="(uuids) => store.remove_host(uuids)"
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
import { appStorage } from "@/store/AppStorage";
import { defineComponent } from "vue";
import { RAIDEnums } from "@/store/types/enums";
import { TOAST_SUCCESS } from "@/extra/toast-config";

const store = appStorage();

store.init();

defineComponent({ HostTable });

function clk_addHost() {
  store.hostsList.push({
    id: store.hostsList.length,
    uuids: [uuid.v4().toString()],
    name: "new_host",
    manufacturer: "no-name",

    cpu: { sockets: 0, cores: 0 },
    ram: { slots: 0, size: 0 },
    storage: {
      amount: 0,
      size: 0,
      raid: RAIDEnums.R0,
    },
  });
  createToast("New Host added!", TOAST_SUCCESS);
}
</script>
