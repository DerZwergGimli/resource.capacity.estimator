<template>
  <div class="tabs justify-center">
    <a
      v-for="sdt of system_dimensioning_types"
      :key="sdt"
      v-bind:class="
        'tab tab-lifted uppercase text-md ' +
        (sdt === data.sdt_selected ? 'tab-active' : '')
      "
      @click="clk_selectSystemDimensions(sdt)"
      >{{ sdt }}</a
    >
  </div>
</template>

<script setup lang="ts">
import { system_dimensioning_types } from "@/js/types/enums";
import { dataStore } from "@/store/DataStore";
const data = dataStore();

function clk_selectSystemDimensions(sdt: system_dimensioning_types) {
  data.sdt_selected = sdt;
}
</script>
