import { appStorage } from "@/store/AppStorage";
import {
  VirtualHardwareEnums,
  SystemRecommendationEnums,
} from "@/store/types/enums";

export function get_used_cpu(
  host_uuid: string,
  hardware_type: VirtualHardwareEnums,
  system_recommendation: SystemRecommendationEnums
) {
  const storage = appStorage();

  // Map all vm_uuids in assignments
  const assigned_vm_uuids = storage.assignmentsList
    .filter((assignment) => assignment.host_uuid === host_uuid)
    .flatMap((assignment) => assignment.vm_uuid);
  console.log("assigned_array: " + assigned_vm_uuids);

  const resources_vms_array: number[] = [];
  for (const assignment_vm_uuid of assigned_vm_uuids) {
    resources_vms_array.push(
      storage.vmsList.find((vm) =>
        vm.uuids.find((uuid) => uuid === assignment_vm_uuid)
      )?.vcpu.rec || 0
    );
  }

  console.log("resouces_arry: " + resources_vms_array);

  return resources_vms_array.reduce((a, b) => {
    return a + b;
  }, 0);
}
