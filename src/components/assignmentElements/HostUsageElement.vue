<template>
  <div class="flex flex-col">
    <div
      class="radial-progress bg-primary text-primary-content border-4 border-primary"
      :style="
        '--value: ' +
        calculate_percentage(
          host.ram.slots,
          host.ram.size,
          get_used(host_uuid, virtual_hw)
        )
      "
    >
      {{
        calculate_percentage(
          host.ram.slots,
          host.ram.size,
          get_used(host_uuid, virtual_hw)
        )
      }}
    </div>
    <div class="flex flex-row self-center">
      <i
        :class="
          'bi self-center pr-2' +
          (virtual_hw == VirtualHardwareEnums.vcpu
            ? ' bi-cpu'
            : virtual_hw == VirtualHardwareEnums.vram
            ? ' bi-memory'
            : ' bi-device-hdd')
        "
      ></i>
      <p>
        {{ get_used(host_uuid, virtual_hw) }}
      </p>
      /
      <p>{{ host.ram.slots * host.ram.size }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, unref } from "vue";
import { get_used } from "@/extra/calculator";
import { VirtualHardwareEnums } from "@/store/types/enums";
import { Host } from "@/store/types/Host";

defineProps({
  host_uuid: {
    type: String,
    default: "none",
  },
  virtual_hw: {
    type: Object as PropType<VirtualHardwareEnums>,
    default: VirtualHardwareEnums.vcpu,
  },
  host: {
    type: Object as PropType<Host>,
    default: null,
  },
});

function calculate_percentage(a: number, b: number, c: number) {
  return ((c / (a * b)) * 100).toFixed(0);
}
</script>

<script lang="ts">
export default {
  name: "HostUsageElement",
};
</script>
