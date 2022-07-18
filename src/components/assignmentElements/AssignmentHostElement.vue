<template>
  <div class="flex flex-col" v-if="host">
    <div class="flex flex-row">
      <div class="basis-1/2">
        <p class="text-lg">{{ host.name }}</p>
      </div>
      <div class="basis-1/2 mr-2">
        <div class="flex flex-row">
          <i class="bi bi-cpu"></i>
          <progress
            class="progress mt-2 mx-1"
            :value="
              get_used_cpu(
                host_uuid,
                VirtualHardwareEnums.vcpu,
                system_recommendation
              )
            "
            :max="host.cpu.sockets * host.cpu.cores"
          ></progress>
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
          <progress
            class="progress mt-2 mx-1"
            :value="
              get_used_cpu(
                host_uuid,
                VirtualHardwareEnums.vram,
                system_recommendation
              )
            "
            :max="host.ram.slots * host.ram.size"
          ></progress>
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
          <progress
            class="progress mt-2 mx-1"
            :value="
              get_used_cpu(
                host_uuid,
                VirtualHardwareEnums.vstorage,
                system_recommendation
              )
            "
            :max="host.storage.amount * host.storage.size"
          ></progress>
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
          <p class="">{{ host.storage.amount * host.storage.size }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-row">
      <div class="basis-1/3"></div>
      <div class="flex flex-row">
        <div class="flex flex-col">
          <i class="bi bi-cpu self-center"></i>
          <div
            class="radial-progress text-primary self-center"
            style="--value: 70"
          >
            70%
          </div>
        </div>
        <div class="flex flex-col">
          <i class="bi bi-memory self-center"></i>
          <div
            class="radial-progress text-primary self-center"
            style="--value: 70"
          >
            70%
          </div>
        </div>
        <div class="flex flex-col">
          <i class="bi bi-device-hdd self-center"></i>
          <div
            class="radial-progress text-primary self-center"
            style="--value: 70"
          >
            70%
          </div>
        </div>
      </div>
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
