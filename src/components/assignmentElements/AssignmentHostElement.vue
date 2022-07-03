<template>
  <div class="flex flex-row space-x-2 items-center" v-if="host">
    <p class="text-lg">{{ host.name }}</p>
    <div class="flex flex-row">
      <i class="bi bi-cpu"></i>
      <p>
        {{
          get_used_cpu(
            host_uuid,
            VirtualHardwareEnums.vcpu,
            system_recommendation
          )
        }}
      </p>
      /
      <p>{{ host.cpu.sockets * host.cpu.cores }}</p>
    </div>
    <div class="flex flex-row">
      <i class="bi bi-memory"></i>
      <p>
        {{
          get_used_cpu(
            host_uuid,
            VirtualHardwareEnums.vram,
            system_recommendation
          )
        }}
      </p>
      /
      <p>{{ host.ram.slots * host.ram.size }}</p>
    </div>
    <div class="flex flex-row">
      <i class="bi bi-device-hdd"></i>
      <p>
        {{
          get_used_cpu(
            host_uuid,
            VirtualHardwareEnums.vstorage,
            system_recommendation
          )
        }}
      </p>
      /
      <p>{{ host.storage.amount * host.storage.size }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Host } from "@/store/types/Host";
import { VM } from "@/store/types/VM";
import { Assignment } from "@/store/types/Assignment";
import {
  VirtualHardwareEnums,
  SystemRecommendationEnums,
} from "@/store/types/enums";
import { get_used_cpu } from "@/extra/calculator";

defineProps({
  host_uuid: {
    type: String,
    default: "",
  },
  host: {
    type: Object as PropType<Host>,
    default: undefined,
  },
  system_recommendation: {
    type: String as PropType<SystemRecommendationEnums>,
    default: "rec",
  },
});
</script>

<script lang="ts">
export default {
  name: "AssignmentHostElement",
};
</script>
