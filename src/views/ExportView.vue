<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Export</h1>
    </div>
    <button class="btn m-4" @click="clk_download()">Download</button>
    <div class="mx-4 bg-base-300 p-2">
      <vue-json-pretty :path="'res'" :data="data.export()"></vue-json-pretty>
    </div>
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import { createToast } from "mosha-vue-toastify";
import "vue-json-pretty/lib/styles.css";
import { defineComponent } from "vue";
import download from "downloadjs";

import { dataStore } from "@/store/DataStore";
const data = dataStore();
data.check_init();

defineComponent({ VueJsonPretty });

function clk_download() {
  createToast("Download started...", { type: "info" });
  download(
    JSON.stringify(data.export(), null, 3),
    "resource_capacity_estimator_export.json",
    "text/plain"
  );
}
</script>
