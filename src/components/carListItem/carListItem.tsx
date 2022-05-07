import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import {
  CarListItemWrapper,
  CarListItemInfoWrapper,
  CarListItemProps,
} from ".";

import NoCar from "../../img/noCar.png";
import { useAppDispatch } from "../../hooks";
import { carsActions } from "../../store";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const carListItemClickHandler = () => {
    dispatch(
      carsActions.setCurrentCar({
        stockNumber,
        manufacturerName,
        modelName,
        mileage,
        fuelType,
        color,
        pictureUrl,
      })
    );
    navigate("/details", { replace: true });
  };

  return (
    <CarListItemWrapper
      borderColor={theme.palette.secondary.light}
      color={theme.palette.secondary.main}
      primary={theme.palette.primary.main}
      onClick={carListItemClickHandler}
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
