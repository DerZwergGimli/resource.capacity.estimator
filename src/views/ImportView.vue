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
    <file-pond
      name="uploadJson"
      ref="pond"
      label-idle="Drop files here..."
      v-bind:allow-multiple="false"
      v-bind:files="uploadedFiles"
      v-on:server="some"
      v-on:init="handleFilePondInit"
    />
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

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
const FilePond = vueFilePond();

export default {
  data: function () {
    return {
      uploadedFiles: [],
    };
  },
  methods: {
    handleFilePondInit: function () {
      console.info("FilePond has initialized");
      // FilePond instance methods are available on `this.$refs.pond`
    },
    some: function () {
      console.info("Found");
      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
  components: {
    FilePond,
  },
};
</script>
