import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "@/types/vehicle";
import { fetchVehicles } from "./vehiclesThunks";

interface VehiclesState {
  list: Vehicle[];
  selected: Vehicle | null;
  loading: boolean;
  error: string | null;
}

const initialState: VehiclesState = {
  list: [],
  selected: null,
  loading: false,
  error: null,
};

const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    selectVehicle(state, action: PayloadAction<Vehicle>) {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state) => {
        state.loading = false;
        state.error = "Error cargando vehículos";
      });
  },
});

export const { selectVehicle } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
