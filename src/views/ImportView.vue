<template>
  <div class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>IMPORT</h1>
    </div>
    <div class="mx-4">
      <!-- <input
        type="text"
        placeholder="Type here"
        class="input input-bordered input-primary w-full max-w-xs"
        @input="loadFile($event.target.value)"
      /> -->
      <input type="file" @change="evt_uploadFile" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { createToast } from "mosha-vue-toastify";
import { appStorage } from "@/store/AppStorage";
import { Host } from "@/store/types/Host";
import { VM } from "@/store/types/VM";
import { Assignment } from "@/store/types/Assignment";

const storage = appStorage();
storage.init();

function evt_uploadFile(event: any) {
  console.info("Loading uploaded file...");

  const blob = new Blob([event.target.files[0]], { type: "application/json" });

  let reader = new FileReader();

  reader.onloadend = function () {
    const data_string = reader.result?.toString();
    const data_json = JSON.parse(JSON.parse(JSON.stringify(data_string)));
    storage.import(data_json.hosts, data_json.vms, data_json.assignments);
    createToast("Data imported from File", { type: "success" });
    // console.info("...Imported!");
  };

  reader.onerror = function () {
    createToast("Error loading file content (check console)", {
      type: "danger",
    });
    console.error(reader.error);
  };

  reader.readAsText(blob);
}

// function loadFile(value) {
//   try {
//     JSON.parse(value);
//     data.import(JSON.parse(value));
//     createToast("Data Imported", { type: "success" });
//   } catch {
//     console.log(".");
//     createToast("Unable to load Data", { type: "danger" });
//   }
// }
</script>
