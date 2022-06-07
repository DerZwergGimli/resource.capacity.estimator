<template>
  <TopNavbar></TopNavbar>
  <div class="py-2"></div>
  <router-view />
</template>

<script setup lang="ts">
import TopNavbar from "@/components/navigation/TopNavbar.vue";
import { defineComponent } from "vue";

defineComponent({
  TopNavbar,
});
</script>
