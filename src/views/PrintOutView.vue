<template>
  <div class="flex flex-col">
    <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
      <h1>Print Preview</h1>
    </div>
    <div class="flex flex-row justify-center space-x-2">
      <button class="btn btn-primary" @click="generatePDF()">
        Generate PDF
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { dataStore } from "@/store/DataStore";
const data = dataStore();
data.check_init();

let vms_list = data.vms.map((vms, index) => {
  return [index, vms.name, vms.os, vms.amount];
});

let hosts_list = data.hosts.map((host, index) => {
  return [index, host.name, host.manufacturer, host.amount];
});

data.assignments.sort(function (a, b) {
  return a.host_uuid.localeCompare(b.host_uuid);
});

console.log(data.assignments);

function generatePDF() {
  const doc = new jsPDF();

  doc.text("VM-Table", 15, 10);
  autoTable(doc, {
    head: [["ID", "VM-Name", "OS", "Amount"]],
    body: vms_list,
  });

  doc.addPage();
  doc.text("Host-Table", 15, 10);
  autoTable(doc, {
    head: [["ID", "Host-Name", "Manufacturer", "Amount"]],
    body: hosts_list,
  });

  doc.save("Resource_Calculator_Export.pdf");
}
</script>
