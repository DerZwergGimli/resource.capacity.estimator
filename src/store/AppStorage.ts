import { defineStore } from "pinia";
import { Host } from "@/store/types/Host";
import { VM } from "@/store/types/VM";
import { Assignment } from "@/store/types/Assignment";
import { SystemRecommendationEnums } from "@/store/types/enums";

export const appStorage = defineStore({
  id: "app_storage",
  state: () => ({
    initialized: 0,
    hostsList: [] as Host[],
    vmsList: [] as VM[],
    assignmentsList: [] as Assignment[],
    system_recommendation: "rec" as SystemRecommendationEnums,
  }),

  actions: {
    async init() {
      if (!this.initialized) {
        console.info("Initializing AppStore!");
        await fetch("default/default_data.json")
          .then((response) => response.json())
          .then((data) => {
            this.hostsList = data.hosts;
            this.vmsList = data.vms;
            this.assignmentsList = data.assignments;
          })
          .catch((error) => {
            console.error(error);
          });
        this.initialized = 1;
      }
    },
    make_assignment(host_uuid: string, vm_uuid: string) {
      console.info(
        "Assigning -> host_uuid:" + host_uuid,
        " vm_uuid:" + vm_uuid
      );
      if (
        this.assignmentsList.find(
          (assignment) => assignment.host_uuid === host_uuid
        )
      ) {
        this.assignmentsList
          .filter((assignment) => assignment.host_uuid === host_uuid)
          .map((element) => element.vm_uuid.push(vm_uuid));
      } else {
        this.assignmentsList.push({
          host_uuid: host_uuid,
          vm_uuid: [vm_uuid],
        });
      }
    },
    remove_assignment(host_uuid: string, vm_uuid: string) {
      console.info(
        "Removing Assigment -> host_uuid:" + host_uuid + " vm_uuid:" + vm_uuid
      );
      //Find index to remove
      let index_to_remove = -2;
      for (const assignment of this.assignmentsList) {
        index_to_remove = assignment.vm_uuid.findIndex(
          (uuid) => uuid === vm_uuid
        );
      }
      //Remove index from array
      if (index_to_remove != -2) {
        this.assignmentsList
          .find((assignment) => assignment.host_uuid === host_uuid)
          ?.vm_uuid.splice(index_to_remove, 1);
      }
    },
    export() {
      return {
        hosts: this.hostsList,
        vms: this.vmsList,
        assignments: this.assignmentsList,
      };
    },
  },
});
