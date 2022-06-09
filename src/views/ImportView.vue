<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>IMPORT</h1>
    </div>
    <div class="mx-4">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        @input="loadFile($event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { createToast } from "mosha-vue-toastify";
import { dataStore } from "@/store/DataStore";
const data = dataStore();

function loadFile(value) {
  try {
    JSON.parse(value);
    data.import(JSON.parse(value));
    createToast("Data Imported", { type: "success" });
  } catch {
    console.log(".");
    createToast("Unable to load Data", { type: "danger" });
  }
}
</script>
