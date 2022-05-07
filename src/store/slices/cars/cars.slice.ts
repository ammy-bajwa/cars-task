/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice } from "@reduxjs/toolkit";
import { CarsSliceState } from "./cars.types";
import { getCars } from "./cars-api";

export const carsInitialState: CarsSliceState = {
  cars: [],
  currentCar: null,
  loading: false,
  totalCarsCount: 0,
  totalPageCount: 0,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action: any) => {
      const { cars, totalCarsCount, totalPageCount } = action?.payload;
      state.loading = false;
      state.cars = cars;
      state.totalCarsCount = totalCarsCount;
      state.totalPageCount = totalPageCount;
    });
    builder.addCase(getCars.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCars.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const carsActions = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
