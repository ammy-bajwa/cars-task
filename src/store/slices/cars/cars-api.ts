import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk(
  "cars/getting-cars",
  async ({
    manufacturer = "Fiat",
    color = "white",
    pageNum = 1,
  }: {
    manufacturer?: string;
    color?: string;
    pageNum?: number;
  }) => {
    return fetch(
      `https://auto1-mock-server.herokuapp.com/api/cars?manufacturer=${manufacturer}&color=${color}&sort=asc&page=${pageNum}`
    )
      .then((res) => Promise.resolve(res.json()))
      .catch((err) => Promise.reject(err));
  }
);

export const getColorsList = createAsyncThunk("cars/colors-list", async () => {
  return fetch("https://auto1-mock-server.herokuapp.com/api/colors")
    .then((res) => Promise.resolve(res.json()))
    .catch((err) => Promise.reject(err));
});

export const getManufactures = createAsyncThunk(
  "cars/getting-manufactures",
  async () => {
    return fetch("https://auto1-mock-server.herokuapp.com/api/manufacturers")
      .then((res) => Promise.resolve(res.json()))
      .catch((err) => Promise.reject(err));
  }
);
