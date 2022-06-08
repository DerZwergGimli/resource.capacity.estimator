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
    <div class="flex-grow bg-base-300 rounded-box">
      <div v-for="host in hosts" :key="host">
        <div v-for="n in host.amount" :key="n" class="bg-secondary">
          <div
            v-if="host.amount > 1"
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
                <span class="badge">
                  {{ vm.name }}
                </span>
              </div>
            </div>
          </div>
          <div
            v-else
            @drop="onDrop($event, host, 0)"
            @dragenter.prevent
            @dragover.prevent
          >
            {{ host.name }}
            <div v-for="vm in vms" :key="vm">
              <div
                v-for="res in data.assignments.filter(
                  (a) => a.host_id === host.id && a.vm_id === vm.id
                ).length"
                :key="res"
              >
                <span class="badge">
                  {{ vm.name }}
                </span>
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
data.assignments = undefined;
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
</script>

<style scoped></style>
