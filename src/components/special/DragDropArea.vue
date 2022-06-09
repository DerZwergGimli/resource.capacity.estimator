<template>
  <div class="flex">
    <div
      class="grid flex-grow card bg-base-300 rounded-box place-items-center py-2"
    >
      <div v-for="vm in vms" :key="vm" class="flex flex-col space-y-1">
        <div
          v-for="n in vm.amount -
          data.assignments.filter((a) => a.vm_id === vm.id).length"
          :key="n"
        >
          <span
            class="badge"
            @dragstart="dragStart($event, vm.id)"
            draggable="true"
          >
            {{ vm.name }}
          </span>
        </div>
      </div>
    </div>
    <div class="divider divider-horizontal text-center">
      drag<br />
      &<br />
      drop
    </div>
    <div class="grid flex-grow card bg-base-300 rounded-box">
      <div v-for="host in hosts" :key="host">
        <div
          v-for="n in host.amount"
          :key="n"
          class="bg-base-200 hover:bg-base-300"
        >
          <div
            @drop="onDrop($event, host, n - 1)"
            @dragenter.prevent
            @dragover.prevent
          >
            {{ host.name }}_{{ n }}
            <div v-for="vm in vms" :key="vm">
              <div
                v-for="res in data.assignments.filter(
                  (a) =>
                    a.host_id === host.id &&
                    a.vm_id === vm.id &&
                    a.host_index === n - 1
                ).length"
                :key="res"
              >
                <div class="text-sm">
                  {{ vm.name }}
                  <label
                    class="btn btn-sm btn-circle text-2xs right-2 top-2"
                    @click="clk_remove(host.id, vm.id)"
                    >x</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { dataStore } from "@/store/DataStore";
import { storeToRefs } from "pinia/dist/pinia";
const data = dataStore();
const { vms, hosts, assignments } = storeToRefs(data);

function dragStart(event, vm_id) {
  console.log(vm_id);
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("vm_id", vm_id);
}

function onDrop(event, host, host_index) {
  console.log(
    "Host=" +
      host.name +
      " , index=" +
      host_index +
      " , vmID" +
      event.dataTransfer.getData("vm_id")
  );
  data.assignments.push({
    host_id: host.id,
    host_index: host_index,
    vm_id: +event.dataTransfer.getData("vm_id"),
  });
  //let vmID = parseInt(event.dataTransfer.getData("vmID"));
  //assignments.push({ host_id: host.id, host_index: host_index, vm_id: 0 });
}

function clk_remove(host_id, vm_id) {
  console.log("host_id: " + host_id + ", vm_id" + vm_id);
  let item_to_remove = data.assignments.find(
    (assignment) => assignment.host_id === host_id && assignment.vm_id === vm_id
  );
  data.assignments = this.assignments.filter((assignment) => {
    return assignment !== item_to_remove;
  });
}
</script>

<style scoped></style>
