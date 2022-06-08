import { defineStore } from "pinia";
import { AppDataHosts, AppDataVms } from "@/js/types/data-types";

export const dataStore = defineStore({
  id: "data_store",
  state: () => ({
    test: 0,
    hosts: [] as Array<AppDataHosts>,
    vms: [] as Array<AppDataVms>,
  }),
  actions: {
    async init() {
      console.info("Initializing Store");
      await fetch("default/data.json")
        .then((resp) => resp.json())
        .then((data) => {
          this.hosts = data.hosts;
          this.vms = data.vms;
        })
        .catch((err) => console.error(err));
    },
    check_init() {
      if ((this.hosts.length || this.vms.length) === 0) {
        this.init().then(() => console.log("initialized uninitialized data"));
      }
    },
    export() {
      return { hosts: this.hosts, vms: this.vms };
    },
  },
});
