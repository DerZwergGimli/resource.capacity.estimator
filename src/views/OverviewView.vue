<template>
  <div id="printMe" class="flex flex-col text-center">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Overview</h1>
    </div>
    <div class="divider"></div>
    <button id="dontPrint" class="btn m-4" @click="btn_print">Print</button>
    <div id="printMe">
      <div class="grid xl:grid-cols-2 gap-4 m-4">
        <div v-for="assignment in storage.assignmentsList" :key="assignment">
          <OverviewCard :assignment="assignment"></OverviewCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { appStorage } from "@/store/AppStorage";
import OverviewCard from "@/components/special/OverviewCard.vue";
import { defineComponent } from "@vue/runtime-core";

defineComponent({
  OverviewCard,
});

const storage = appStorage();
storage.init();

async function btn_print() {
  var originalContents = document.body.innerHTML;
  document.getElementById("dontPrint").remove();
  var printContents = document.getElementById("printMe");

  //document.getElementById("footer").style.display = "none";

  document.body.innerHTML = printContents.innerHTML;

  window.print();
  document.body.innerHTML = originalContents;

  return false;
}
</script>

<script>
export default {
  components: { OverviewCard },
  name: "OverviewView.vue",
};
</script>

<style scoped>
@media print and (width: 21cm) and (height: 29.7cm) {
  @page {
    margin: 3cm;
  }
}
</style>
