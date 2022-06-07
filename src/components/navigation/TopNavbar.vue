<template>
  <div class="navbar bg-base-100 shadow-2xl">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl"
        >Resource Capacity Estimator</a
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/import">Import</router-link></li>
        <li><router-link to="/export">Export</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <SwitchTheme class="ml-2"></SwitchTheme>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import SwitchTheme from "@/components/buttons/SwitchTheme.vue";

defineComponent({ SwitchTheme });
</script>
