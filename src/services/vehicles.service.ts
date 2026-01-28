import { Vehicle } from "@/types/vehicle";

export const getVehiclesMock = async (): Promise<Vehicle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Toyota Corolla", price: 120 },
        { id: "2", name: "Mazda CX-5", price: 180 },
        { id: "3", name: "Chevrolet Spark", price: 90 },
      ]);
    }, 800);
  });
};
