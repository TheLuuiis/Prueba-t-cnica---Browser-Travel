import { Vehicle } from "@/types/vehicle";
import { useAppDispatch } from "@/store/hooks";
import { selectVehicle } from "@/store/vehicles/vehiclesSlice";
import { useRouter } from "next/router";
import Image from "next/image";

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
    <div className="container-vehicle">
      <div className="vehicle">
        <div className="description-vehicle">
          <Image
            src="/ford.webp"
            alt="circle"
            width={300.44}
            height={153.41}
            priority             
          />
          <div className="tittle-vehicle">
            <h3>{vehicle.name}</h3>
            <p>Compacto</p>
          </div>
        </div>
        <div className="container-count">
          <div className="price">
            <sub>COP $1.266.829</sub>
            <div className="total-price">
              <div className="fee">
                Tarifa diaría
              </div>
              <p>COP: ${vehicle.price}</p>
            </div>
            <div className="fee-day">
              Tarifa por 4 día(s) COP $696.750
            </div>
          </div>
          <button onClick={handleSelect}>Seleccionar</button>
        </div>
      </div>
    </div>
  );
};
