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
    const isAlreadyExists =
      favourites.findIndex((id) => id === currentCar?.stockNumber) < 0
        ? true
        : false;

    setIsAlreadyExists(isAlreadyExists);
  }, [currentCar, favourites]);

  const addToFavouriteHandler = () => {
    if (isAlreadyExists) {
      dispatch(carsActions?.addCarToFavourite(currentCar?.stockNumber));
    } else {
      dispatch(carsActions?.removeCarToFavourite(currentCar?.stockNumber));
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
          text={isAlreadyExists ? "Save" : "Remove From Favourite"}
          clickHandler={addToFavouriteHandler}
        />
      </ButtonWrapper>
    </CarFavSection>
  );
};
