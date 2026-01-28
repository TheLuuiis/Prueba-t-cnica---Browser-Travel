import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { getVehicleImage } from "@/utils/vehicleImage";

export default function Summary() {
  const selected = useAppSelector((state) => state.vehicles.selected);
  const router = useRouter();

  useEffect(() => {
    if (!selected) router.push("/");
  }, [selected, router]);

  if (!selected) return null;

  return (
    <div className="container-summary">
      <div className="summary">
        <h1>Resumen</h1>

        <div className="summary__image">
          <Image
            src={getVehicleImage(selected.name)}
            alt={selected.name}
            width={520}
            height={260}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <p>Vehículo: {selected.name}</p>
        <p>Precio final: ${selected.price}</p>
      </div>
    </div>
  );
}