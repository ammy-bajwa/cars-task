/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice } from "@reduxjs/toolkit";
import {
  CarsSliceState,
  getCars,
  getColorsList,
  getManufactures,
  getMoreCars,
} from ".";

export const carsInitialState: CarsSliceState = {
  cars: [],
  currentCar: null,
  currentPage: 1,
  loading: false,
  loadingFilters: false,
  totalCarsCount: 0,
  totalPageCount: 0,
  colors: [],
  manufacturers: [],
  selectedColor: "red",
  selectedManufacturer: "Audi",
};

const carsSlice = createSlice({
  name: "cars",
  initialState: carsInitialState,
  reducers: {
    setCurrentCar(state, action) {
      state.currentCar = action?.payload;
    },
    setSelectedColor(state, action) {
      state.selectedColor = action?.payload;
    },
    setSelectedManufacturer(state, action) {
      state.selectedManufacturer = action?.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action?.payload;
    },
  },
  extraReducers: (builder) => {
    // Here we will handle cars
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

    // Here we will handle loading more cars
    builder.addCase(getMoreCars.fulfilled, (state, action: any) => {
      const { cars, totalCarsCount, totalPageCount } = action?.payload;
      state.loading = false;
      state.cars = [...state.cars, ...cars];
      state.totalCarsCount = totalCarsCount;
      state.totalPageCount = totalPageCount;
    });
    builder.addCase(getMoreCars.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMoreCars.rejected, (state, action) => {
      state.loading = false;
    });

    // Here we will handle getting colors
    builder.addCase(getColorsList.fulfilled, (state, action: any) => {
      const { colors } = action?.payload;
      state.colors = colors;
      state.loadingFilters = false;
    });
    builder.addCase(getColorsList.pending, (state, action) => {
      state.loadingFilters = true;
    });
    builder.addCase(getColorsList.rejected, (state, action) => {
      state.loadingFilters = false;
    });

    // Here we will handle getting manufacturers
    builder.addCase(getManufactures.fulfilled, (state, action: any) => {
      const { manufacturers } = action?.payload;
      state.manufacturers = manufacturers?.map((data: any) => data?.name);
      state.loadingFilters = false;
    });
    builder.addCase(getManufactures.pending, (state, action) => {
      state.loadingFilters = true;
    });
    builder.addCase(getManufactures.rejected, (state, action) => {
      state.loadingFilters = false;
    });
  },
});

export const carsActions = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
