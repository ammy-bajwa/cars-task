import { FC } from "react";
import { useTheme } from "@mui/material/styles";

import { CarListItemWrapper, CarListItemInfoWrapper } from ".";

import NoCar from "../../img/noCar.png";

type mileageType = {
  number: number;
  unit: string;
};

interface CarListItemProps {
  data: {
    stockNumber: number;
    manufacturerName: string;
    modelName: string;
    mileage: mileageType;
    color: string;
    pictureUrl: string;
    fuelType: string;
  };
}

export const CarListItem: FC<CarListItemProps> = ({
  data: {
    stockNumber = 0,
    manufacturerName = "No Data",
    modelName = "No Data",
    mileage,
    fuelType,
    color = "No Data",
    pictureUrl = NoCar,
  },
}) => {
  const theme = useTheme();

  return (
    <CarListItemWrapper
      borderColor={theme.palette.secondary.light}
      color={theme.palette.secondary.main}
      primary={theme.palette.primary.main}
    >
      <img src={pictureUrl} alt="car img" height={"100px"} />
      <CarListItemInfoWrapper>
        <h2 style={{ margin: 0 }}>
          {manufacturerName} {modelName}
        </h2>
        <div>
          Stock #{stockNumber} - {mileage.number / 1000 + mileage.unit} -{" "}
          {fuelType} -{color}
        </div>
        <span>View Details</span>
      </CarListItemInfoWrapper>
    </CarListItemWrapper>
  );
};
