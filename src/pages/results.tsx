import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchVehicles } from "@/store/vehicles/vehiclesThunks";
import { VehicleList } from "@/components/vehicles/VehicleList";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function Results() {
  const dispatch = useAppDispatch();
  const { list, loading, error } = useAppSelector(
    (state) => state.vehicles
  );

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-results">
      <div className="results">
        <h1>Resultados de vehículos</h1>
        <VehicleList vehicles={list} />
      </div>
    </div>
  );
}
