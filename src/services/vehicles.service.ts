import { Vehicle } from "@/types/vehicle";
import { v4 as uuidv4 } from 'uuid';

export const getVehiclesMock = async (): Promise<Vehicle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: uuidv4(), name: "FORD Focus", price: 174.196 },
        { id: uuidv4(), name: "FORD Escape", price: 181.708 },
        { id: uuidv4(), name: "CHEVROLET Suburban", price: 206.606 },
      ]);
    }, 800);
  });
};
