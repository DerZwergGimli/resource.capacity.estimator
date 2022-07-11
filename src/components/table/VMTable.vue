<template>
  <div class="overflow-x-auto">
    <table class="table w-full table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Manufacturer</th>
          <th>CPU <i class="bi bi-cpu"></i></th>
          <th>RAM <i class="bi bi-memory"></i></th>
          <th>Storage <i class="bi bi-device-hdd"></i></th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- body -->
        <tr v-for="(vm, index) in vms" :key="index">
          <th>{{ index }}</th>
          <th>
            <input
              class="input input-bordered input-xs w-full max-w-xs"
              type="text"
              :value="vm.name"
              @input="(event) => (vm.name = event.target.value)"
            />
          </th>
          <th>
            <input
              class="input input-bordered input-xs w-full max-w-xs"
              type="text"
              :value="vm.os"
              @input="(event) => (vm.os = event.target.value)"
            />
          </th>
          <th>
            <VMResources
              :min="vm.vcpu.min"
              @changed_min="(value) => (vm.vcpu.min = parseInt(value))"
              :rec="vm.vcpu.rec"
              @changed_rec="(value) => (vm.vcpu.rec = parseInt(value))"
              :max="vm.vcpu.max"
              @changed_max="(value) => (vm.vcpu.max = parseInt(value))"
              type="cpu"
            ></VMResources>
          </th>
          <th>
            <VMResources
              :min="vm.vram.min"
              @changed_min="(value) => (vm.vram.min = parseInt(value))"
              :rec="vm.vram.rec"
              @changed_rec="(value) => (vm.vram.rec = parseInt(value))"
              :max="vm.vram.max"
              @changed_max="(value) => (vm.vram.max = parseInt(value))"
              type="ram"
            ></VMResources>
          </th>
          <th>
            <VMResources
              :min="vm.vstorage.min"
              @changed_min="(value) => (vm.vstorage.min = parseInt(value))"
              :rec="vm.vstorage.rec"
              @changed_rec="(value) => (vm.vstorage.rec = parseInt(value))"
              :max="vm.vstorage.max"
              @changed_max="(value) => (vm.vstorage.max = parseInt(value))"
              type="storage"
            ></VMResources>
          </th>
          <th>
            <label class="input-group input-group-xs">
              <span class="">Total</span>
              <input
                :class="
                  'input input-bordered input-xs' +
                  (vm.uuids.length == 0 ? ' input-error' : '')
                "
                type="number"
                :value="vm.uuids.length"
                @input="
                  (event) => {
                    store.check_uuid_length(
                      vm.name,
                      parseInt(event.target.value)
                    );
                  }
                "
              />
              <span>#</span>
            </label>
          </th>
          <th>
            <i
              class="btn btn-sm bi bi-trash"
              @click="$emit('clk_remove_item', vm.uuids)"
            ></i>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import VMResources from "@/components/table/table_elements/VMResources.vue";
import { VM } from "@/store/types/VM";
import { appStorage } from "@/store/AppStorage";

const store = appStorage();
store.init();

defineProps({
  vms: {
    type: Array as PropType<VM[]>,
    default: null,
  },
});
</script>
