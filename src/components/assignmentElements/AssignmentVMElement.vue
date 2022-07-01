<template>
  <div class="flex flex-row space-x-2 bg-red-300 items-center" v-if="vm">
    <p class="text-lg">{{ vm.name }}</p>
    <p>{{ vm.vcpu.rec }}</p>
    <p>{{ vm.vram.rec }}</p>
    <p>{{ vm.vstorage.rec }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { VM } from "@/store/types/VM";

defineProps({
  vm: {
    type: Object as PropType<VM>,
    default: undefined,
  },
});
</script>

<script lang="ts">
export default {
  name: "AssignmentVMElement",
};
</script>

<style scoped></style>
