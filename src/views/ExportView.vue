<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Export</h1>
    </div>
    <div class="divider"></div>
    <button class="btn m-4 hover:bg-primary" @click="clk_download()">
      <div class="flex flex-row space-x-2">
        <i class="bi bi-download"></i>
        <div>Download</div>
        <i class="bi bi-download"></i>
      </div>
    </button>
    <div class="mx-4 bg-base-300 p-2">
      <vue-json-pretty :path="'res'" :data="store.export()"></vue-json-pretty>
    </div>
  </div>
</template>

<script setup>
import VueJsonPretty from "vue-json-pretty";
import { createToast } from "mosha-vue-toastify";
import "vue-json-pretty/lib/styles.css";
import { defineComponent } from "vue";
import download from "downloadjs";

import { appStorage } from "@/store/AppStorage";
const store = appStorage();
store.init();

defineComponent({ VueJsonPretty });

function clk_download() {
  createToast("Download started...", { type: "info" });
  download(
    JSON.stringify(store.export(), null, 3),
    "resource_capacity_estimator_export.json",
    "text/plain"
  );
}
</script>
