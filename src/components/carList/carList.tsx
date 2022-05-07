import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarListWrapper } from ".";
import { CarListItem } from "..";
import { useAppSelector } from "../../hooks";

const testData = {
  stockNumber: 87230,
  manufacturerName: "Fiat",
  modelName: "Cinquecento",
  color: "white",
  mileage: {
    number: 102947,
    unit: "km",
  },
  fuelType: "Petrol",
  pictureUrl: "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg",
};

export const CarList = () => {
  const { cars, loading } = useAppSelector((globalStore) => globalStore.cars);

  const carsRenderer = () => {
    if (loading) {
      return "Loading.........";
    }
    return cars?.length
      ? cars.map((car) => <CarListItem data={car} key={car?.stockNumber} />)
      : "No Car Found";
  };

  return <CarListWrapper>{carsRenderer()}</CarListWrapper>;
};
