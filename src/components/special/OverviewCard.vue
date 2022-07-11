<template>
  <div class="border-2 rounded-tr-xl rounded-bl-xl border-cyan-800 w-full">
    <div>
      {{
        storage.hostsList.find((host) =>
          host.uuids.includes(assignment?.host_uuid ?? "none")
        )?.name ?? "error"
      }}
    </div>
    <table class="table table-compact w-full">
      <thead>
        <tr>
          <th></th>
          <th>VM-Name</th>
          <th class="text-right">CPU</th>
          <th class="text-right">RAM</th>
          <th class="text-right">Storage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(vm_uuid, index) in assignment?.vm_uuid" :key="vm_uuid">
          <th>{{ index }}</th>
          <td>
            {{
              storage.vmsList.find((vm) => vm.uuids.includes(vm_uuid))?.name ??
              "error"
            }}
          </td>
          <td class="text-right">
            {{
              storage.vmsList.find((vm) => vm.uuids.includes(vm_uuid))?.vcpu[
                storage.system_recommendation ?? "error"
              ]
            }}
            Cores
          </td>
          <td class="text-right">
            {{
              storage.vmsList.find((vm) => vm.uuids.includes(vm_uuid))?.vram[
                storage.system_recommendation ?? "error"
              ]
            }}
            GB
          </td>
          <td class="text-right">
            {{
              storage.vmsList.find((vm) => vm.uuids.includes(vm_uuid))
                ?.vstorage[storage.system_recommendation] ?? "error"
            }}
            GB
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Assignment } from "@/store/types/Assignment";
import { appStorage } from "@/store/AppStorage";

const storage = appStorage();
storage.init();

defineProps({
  assignment: {
    type: Object as PropType<Assignment>,
    default: undefined,
  },
});
</script>

<script lang="ts">
export default {
  name: "OverviewCard.vue",
};
</script>

<style scoped></style>
