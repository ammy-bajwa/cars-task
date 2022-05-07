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
  return (
    <CarListWrapper>
      <CarListItem data={testData}/>
      <CarListItem data={testData} />
    </CarListWrapper>
  );
};
