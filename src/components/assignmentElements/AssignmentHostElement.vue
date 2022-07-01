<template>
  <div class="flex flex-row space-x-2 items-center" v-if="host">
    <p class="text-lg">{{ host.name }}</p>
    <p>{{ host.cpu.cores }}</p>
    <p>{{ host.ram.size }}</p>
    <p>{{ host.storage.amount }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Host } from "@/store/types/Host";
import { Assignment } from "@/store/types/Assignment";

defineProps({
  host: {
    type: Object as PropType<Host>,
    default: undefined,
  },
  assignements: {
    type: Object as PropType<Assignment>,
    default: undefined,
  },
});
</script>

<script lang="ts">
export default {
  name: "AssignmentHostElement",
};
</script>
