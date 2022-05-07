import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk("cars/getting-cars", async () => {
  return  fetch(
    "https://auto1-mock-server.herokuapp.com/api/cars?manufacturer=Fiat&color=white&sort=asc&page=1"
  )
    .then((res) => Promise.resolve(res.json()))
    .catch((err) => Promise.reject(err));
});
