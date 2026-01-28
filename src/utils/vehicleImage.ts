const vehicleImageByBrand: Record<string, string> = {
  ifar: "/ifar.webp",
  ford: "/ford.webp",
  chevrolet: "/chevrolet.webp",
};

export function getVehicleImage(name: string) {
  const normalized = name.trim().toLowerCase();

  if (normalized.includes("escape")) return vehicleImageByBrand.ifar;
  if (normalized.includes("ford")) return vehicleImageByBrand.ford;
  if (normalized.includes("chevrolet")) return vehicleImageByBrand.chevrolet;

  return vehicleImageByBrand.ifar;
}