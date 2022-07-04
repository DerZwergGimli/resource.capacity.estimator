<template>
  <div class="host flex flex-col text-center">
    <div class="grid m-4 py-2 card bg-base-300 rounded-box place-items-center">
      <h1>Hosts Configuration</h1>
      <div class="flex flex-row space-x-2">
        <!-- TODO: Move this into a separate component  -->
        <!--        <ValueCard
          text="host"
          :value="calculate_total_hosts(store.hosts)"
        ></ValueCard>
        <ValueCard
          text="vm"
          :value="calculate_total_vms(store.vms)"
        ></ValueCard>
        <ValueCard
          text="assignment"
          :value="store.assignments.length"
        ></ValueCard>-->
      </div>
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
const store = appStorage();

store.init();

defineComponent({ HostTable });

function clk_addHost() {
  store.hostsList.push({
    id: store.hostsList.length,
    uuids: [uuid.v4().toString()],
    name: "new_host",
    manufacturer: "no-name",
    amount: 1,
    cpu: { sockets: 0, cores: 0 },
    ram: { slots: 0, size: 0 },
    storage: { amount: 0, size: 0 },
  });
  createToast("New Host added!", { type: "success" });
}

/*function clk_removeItem(host_uuid: string) {
  let item_to_remove = store.hostsList.find((host) => host.uuid == host_uuid);
  store.hosts = store.hosts.filter((host) => {
    return host !== item_to_remove;
  });
  createToast("Host " + item_to_remove?.name + " removed!", {
    type: "success",
  });
}*/
</script>
