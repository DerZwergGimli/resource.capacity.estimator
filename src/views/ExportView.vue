<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Export</h1>
    </div>
    <button class="btn m-4">SAVE</button>
    <div class="mx-4 bg-base-300 p-2">
      <vue-json-pretty :path="'res'" :data="data.export()"></vue-json-pretty>
    </div>
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { defineComponent } from "vue";

import { dataStore } from "@/store/DataStore";
const data = dataStore();
data.check_init();

defineComponent({ VueJsonPretty });
</script>
