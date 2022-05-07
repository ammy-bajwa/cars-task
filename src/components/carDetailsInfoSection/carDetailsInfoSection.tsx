import { FC } from "react";

import { CarDetailsSection } from ".";
import { useAppSelector } from "../../hooks";

export const CarDetailsInfoSection: FC = () => {
  const currentCar = useAppSelector(
    (globalStore) => globalStore?.cars?.currentCar
  );
  return (
    <CarDetailsSection>
      <h1>
        {currentCar?.manufacturerName} {currentCar?.modelName}
      </h1>
      <h3>
        Stock # {currentCar?.stockNumber} - {currentCar?.mileage?.number}{" "}
        {currentCar?.mileage?.unit} - {currentCar?.fuelType} -{" "}
        {currentCar?.color}
      </h3>
      <p>
        This car is currently available and can be delivered as soon as tomorrow
        morning. Please be aware that delivery times shown in this page are not
        definitive and may change due to bad weather conditions
      </p>
    </CarDetailsSection>
  );
};
