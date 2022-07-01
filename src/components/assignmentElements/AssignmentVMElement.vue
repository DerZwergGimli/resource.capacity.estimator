<template>
  <div class="flex flex-row space-x-2 bg-red-300 items-center" v-if="vm">
    <p class="text-lg">{{ vm.name }}</p>
    <p>{{ vm.vcpu[system_recommendation] }}</p>
    <p>{{ vm.vram[system_recommendation] }}</p>
    <p>{{ vm.vstorage[system_recommendation] }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { VM } from "@/store/types/VM";
import { SystemRecommendationEnums } from "@/store/types/enums";

defineProps({
  vm: {
    type: Object as PropType<VM>,
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
  name: "AssignmentVMElement",
};
</script>

<style scoped></style>
