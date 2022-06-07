<template>
  <div class="import">
    <h1>IMPORT</h1>
    <div style="border-style: solid" @dragover.prevent @drop.prevent>
      <input type="file" multiple @change="uploadFile" />
      <div
        @drop="dragFile"
        style="background-color: green; margin-bottom: 10px; padding: 10px"
      >
        Or drag the file here
        <div v-if="File.length">
          <ul v-for="file in File" :key="file">
            <li>{{ file.name }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const File = [];

function uploadFile(this: any, e) {
  this.File = e.target.files;
}
function dragFile(this: any, e) {
  this.File = e.dataTransfer.files;
}
</script>
