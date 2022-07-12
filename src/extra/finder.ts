import { appStorage } from "@/store/AppStorage";

export function find_host(host_uuid: string) {
  const storage = appStorage();

  return storage.hostsList.find((host) => host.uuids.includes(host_uuid));
}

export function find_host_CPU_total(host_uuid: string) {
  const storage = appStorage();

  const host = storage.hostsList.find((host) => host.uuids.includes(host_uuid));

  if (host) {
    return host.cpu.sockets * host.cpu.cores;
  }
  return 0;
}
export function find_host_RAM_total(host_uuid: string) {
  const storage = appStorage();

  const host = storage.hostsList.find((host) => host.uuids.includes(host_uuid));

  if (host) {
    return host.ram.slots * host.ram.size;
  }
  return 0;
}
export function find_host_Storage_total(host_uuid: string) {
  const storage = appStorage();

  const host = storage.hostsList.find((host) => host.uuids.includes(host_uuid));

  if (host) {
    return host.storage.amount * host.storage.size;
  }
  return 0;
}
