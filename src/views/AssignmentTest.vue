<template>
  <div class="grid m-4 h-20 card bg-base-300 rounded-box place-items-center">
    <h1>Assignment</h1>
  </div>
  <div class="flex flex-col w-full m-4 lg:flex-row">
    <div
      class="flex flex-grow space-y-2 card bg-base-300 rounded-box place-items-center"
    >
      <div
        class="flex flex-col space-y-2"
        v-for="vm_element in storage.vmsList"
        :key="vm_element"
      >
        <div v-for="vm_element_uuid in vm_element.uuids" :key="vm_element_uuid">
          <div
            v-if="
              !storage.assignmentsList.find((assignment) =>
                assignment.vm_uuid.find(
                  (vm_uuid) => vm_uuid === vm_element_uuid
                )
              )
            "
            draggable="true"
            @dragstart="on_dragStart($event, vm_element_uuid)"
          >
            <AssignmentVMElement
              id="dragComponent"
              :vm="
                storage.vmsList.find((vm) =>
                  vm.uuids.find((uuid) => uuid === vm_element_uuid)
                )
              "
              :system_recommendation="storage.system_recommendation"
            ></AssignmentVMElement>
          </div>
        </div>
      </div>
    </div>
    <div class="divider lg:divider-horizontal">OR</div>
    <div
      class="flex flex-grow space-y-2 card bg-base-300 rounded-box place-items-center"
    >
      <SystemDimensioningTabs></SystemDimensioningTabs>
      <div
        class="space-y-2"
        v-for="host_element in storage.hostsList"
        :key="host_element"
      >
        <div
          class="w-96 border-2 border-blue-600 drop-zone"
          @drop="on_drop($event, host_element_uuid)"
          @dragover.prevent
          @dragenter.prevent
          v-for="host_element_uuid in host_element.uuids"
          :key="host_element_uuid"
        >
          <AssignmentHostElement
            :host_uuid="host_element_uuid"
            :host="
              storage.hostsList.find((host) =>
                host.uuids.find((uuid) => uuid === host_element_uuid)
              )
            "
            :system_recommendation="storage.system_recommendation"
          ></AssignmentHostElement>
          <div
            v-if="
              storage.assignmentsList.find(
                (assigment) => assigment.host_uuid === host_element_uuid
              )
            "
          >
            <div
              class="flex flex-row space-x-2 border-2 border-green-400"
              v-for="assigned_vm_uuid in storage.assignmentsList.find(
                (assignment) => assignment.host_uuid === host_element_uuid
              ).vm_uuid"
              :key="assigned_vm_uuid"
            >
              <AssignmentVMElement
                :vm="
                  storage.vmsList.find((vm) =>
                    vm.uuids.find((vm_uuid) => vm_uuid === assigned_vm_uuid)
                  )
                "
                :system_recommendation="storage.system_recommendation"
                :show_button="true"
                @clk_remove="
                  btn_removeAssignment(host_element_uuid, assigned_vm_uuid)
                "
              ></AssignmentVMElement>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
  <div>{{ storage.assignmentsList }}</div>
  -->
</template>

<script setup>
import { appStorage } from "@/store/AppStorage";
import AssignmentVMElement from "@/components/assignmentElements/AssignmentVMElement";
import AssignmentHostElement from "@/components/assignmentElements/AssignmentHostElement";
import SystemDimensioningTabs from "@/components/special/SystemDimensioningTabs";
import { defineComponent } from "vue";

defineComponent({
  AssignmentVMElement,
  AssignmentHostElement,
});

const storage = appStorage();
storage.init();

function on_dragStart(event, vm_uuid) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("vm_uuid", vm_uuid);
  console.log(vm_uuid);
}

function on_drop(event, host_uuid) {
  const vm_uuid = event.dataTransfer.getData("vm_uuid");

  storage.make_assignment(host_uuid, vm_uuid);
}

function btn_removeAssignment(host_uuid, vm_uuid) {
  storage.remove_assignment(host_uuid, vm_uuid);
}
</script>

<script>
export default {
  name: "AssignmentTest",
};
</script>

<style scoped>
#dragComponent {
  cursor: move;
}
</style>
