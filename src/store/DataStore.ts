import { defineStore } from "pinia";
import {
  AppData,
  AppDataAssignments,
  AppDataHosts,
  AppDataVms,
} from "@/js/types/data-types";
import { system_dimensioning_types } from "@/js/types/enums";

export const dataStore = defineStore({
  id: "data_store",
  state: () => ({
    hosts: [] as Array<AppDataHosts>,
    vms: [] as Array<AppDataVms>,
    assignments: [] as Array<AppDataAssignments>,
    sdt_selected: "" as system_dimensioning_types,
  }),
  actions: {
    async init() {
      console.info("Initializing Store");
      await fetch("default/data.json")
        .then((resp) => resp.json())
        .then((data) => {
          this.hosts = data.hosts;
          this.vms = data.vms;
          this.assignments = data.assignments;
        })
        .catch((err) => console.error(err));
      this.sdt_selected = system_dimensioning_types.rec;
    },
    async check_init() {
      if ((this.hosts.length || this.vms.length) === 0) {
        await this.init().then(() =>
          console.log("initialized uninitialized data")
        );
      }
    },
    import(data: AppData) {
      console.log(data);
      this.hosts = data.hosts || [];
      this.vms = data.vms || [];
      this.assignments = data.assignments || [];
    },
    export() {
      return {
        hosts: this.hosts,
        vms: this.vms,
        assignments: this.assignments,
      };
    },
  },
});
