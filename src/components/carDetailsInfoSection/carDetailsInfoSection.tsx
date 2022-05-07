import { FC } from "react";

import { CarDetailsSection } from ".";

export const CarDetailsInfoSection: FC = () => {
  return (
    <CarDetailsSection>
      <h1>Chrysler Crossfire</h1>
      <h3>Stock # 61184 - 152.263 KM - Petrol - Yellow</h3>
      <p>
        This car is currently available and can be delivered as soon as tomorrow
        morning. Please be aware that delivery times shown in this page are not
        definitive and may change due to bad weather conditions
      </p>
    </CarDetailsSection>
  );
};
