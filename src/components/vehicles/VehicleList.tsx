import { Vehicle } from "@/types/vehicle";
import { VehicleCard } from "./VehicleCard";

interface Props {
  vehicles: Vehicle[];
}

export const VehicleList = ({ vehicles }: Props) => {
  return (
    <>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </>
  );
};
