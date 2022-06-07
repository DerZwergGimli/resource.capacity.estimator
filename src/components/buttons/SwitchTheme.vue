<template>
  <input
    type="checkbox"
    class="toggle"
    checked
    data-toggle-theme="dark,light"
    data-act-class="ACTIVECLASS"
  />
</template>

<script setup>
import { onMounted } from "vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});
</script>

<style scoped></style>
