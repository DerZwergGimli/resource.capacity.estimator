<template>
  <div class="space-y-1 form-control">
    <label class="input-group input-group-xs">
      <input
        type="number"
        placeholder="Type here"
        :class="
          'input input-bordered input-xs' + (value == 0 ? ' input-error' : '')
        "
        :value="value"
        @input="(event) => $emit('changed', event.target.value)"
      />
      <span class="">
        {{ type === "cpu" ? "Cores" : "GB" }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  type: {
    type: String,
    default: "none",
  },
  value: {
    type: Number,
    default: 0,
  },
});
</script>

<script lang="ts">
export default {
  name: "VMResource",
};
</script>
