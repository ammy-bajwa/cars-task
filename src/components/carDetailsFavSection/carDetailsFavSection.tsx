import { useTheme } from "@mui/material/styles";
import { FC, useEffect, useState } from "react";

import { CarFavSection, ButtonWrapper } from ".";
import { CustomButton } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { carsActions } from "../../store";

export const CarDetailsFavSection: FC = () => {
  const theme = useTheme();

  const [isAlreadyExists, setIsAlreadyExists] = useState(false);

  const dispatch = useAppDispatch();

  const { currentCar, favourites } = useAppSelector(
    (globalStore) => globalStore?.cars
  );

  useEffect(() => {
    console.log(currentCar);
  }, [currentCar]);

  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  useEffect(() => {
    const isAlreadyExists =
      favourites.findIndex((id) => id === currentCar?.stockNumber) < 0
        ? true
        : false;

    setIsAlreadyExists(isAlreadyExists);
  }, [currentCar, favourites]);

  console.log(currentCar?.stockNumber);

  const addToFavouriteHandler = () => {
    if (isAlreadyExists) {
      dispatch(carsActions?.addCarToFavourite(currentCar?.stockNumber));
    }
  };

  return (
    <CarFavSection borderColor={theme.palette.secondary.light}>
      <p>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </p>
      <ButtonWrapper>
        <CustomButton
          text={isAlreadyExists ? "Save" : "Added"}
          clickHandler={addToFavouriteHandler}
        />
      </ButtonWrapper>
    </CarFavSection>
  );
};
