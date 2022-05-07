import { useState } from "react";
import { Link } from "react-router-dom";
import { CarListWrapper } from ".";
import { CarListItem } from "..";

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
  const [cars, setCars] = useState([1, 2, 3]);

  const carsRenderer = () => {
    return cars?.length
      ? cars.map(() => (
          <Link to={"/details"}>
            <CarListItem data={testData} />
          </Link>
        ))
      : "No Car Found";
  };
  return <CarListWrapper>{carsRenderer()}</CarListWrapper>;
};
