import { createAsyncThunk } from "@reduxjs/toolkit";
import { getVehiclesMock } from "@/services/vehicles.service";
import { Vehicle } from "@/types/vehicle";

export const fetchVehicles = createAsyncThunk<Vehicle[]>(
  "vehicles/fetch",
  async () => {
    return await getVehiclesMock();
  }
);