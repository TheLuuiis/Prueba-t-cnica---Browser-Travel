import { Vehicle } from "@/types/vehicle";
import { useAppDispatch } from "@/store/hooks";
import { selectVehicle } from "@/store/vehicles/vehiclesSlice";
import { useRouter } from "next/router";

interface Props {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSelect = () => {
    dispatch(selectVehicle(vehicle));
    router.push("/summary");
  };

  return (
    <div>
      <h3>{vehicle.name}</h3>
      <p>Precio: ${vehicle.price}</p>
      <button onClick={handleSelect}>Seleccionar</button>
    </div>
  );
};
