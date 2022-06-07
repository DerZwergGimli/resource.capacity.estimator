export interface AppData {
  hosts: AppDataHosts[];
  vms: AppDataVms[];
}
export interface AppDataHostsCpu {
  sockets: number;
  cores: number;
}
export interface AppDataHostsRam {
  slots: number;
  size: number;
}
export interface AppDataHostsStorage {
  amount: number;
  size: number;
}
export interface AppDataHosts {
  uuid: string;
  name: string;
  manufacturer: string;
  cpu: AppDataHostsCpu;
  ram: AppDataHostsRam;
  storage: AppDataHostsStorage;
}
export interface AppDataVmsVcpu {
  min: number;
  rec: number;
  max: number;
}
export interface AppDataVmsVram {
  min: number;
  rec: number;
  max: number;
}
export interface AppDataVmsVstorage {
  min: number;
  rec: number;
  max: number;
}
export interface AppDataVms {
  uuid: string;
  name: string;
  os: string;
  vcpu: AppDataVmsVcpu;
  vram: AppDataVmsVram;
  vstorage: AppDataVmsVstorage;
}
