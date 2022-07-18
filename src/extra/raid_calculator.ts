import { RAIDEnums } from "@/store/types/enums";

export function caluclate_raid(
  storage_amount: number,
  storage_size: number,
  raid_config: RAIDEnums
) {
  switch (raid_config) {
    case RAIDEnums.R0:
      return storage_amount * storage_size;
      break;
    case RAIDEnums.R1:
      if (storage_amount >= 2)
        return (storage_amount * storage_size) / storage_amount;
      break;
    default:
      console.log("Raid-Config not implemented");
      break;
  }
  console.log("Error calculating RAID Storage size");
  return 0;
}
