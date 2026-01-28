import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Summary() {
  const selected = useAppSelector((state) => state.vehicles.selected);
  const router = useRouter();

  useEffect(() => {
    if (!selected) router.push("/");
  }, [selected, router]);

  if (!selected) return null;

  return (
    <main>
      <h1>Resumen</h1>
      <p>Vehículo: {selected.name}</p>
      <p>Precio final: ${selected.price}</p>
    </main>
  );
}
