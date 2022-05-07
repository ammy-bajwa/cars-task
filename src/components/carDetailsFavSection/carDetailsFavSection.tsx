import { useTheme } from "@mui/material/styles";
import { FC } from "react";

import { CarFavSection, ButtonWrapper } from ".";
import { CustomButton } from "..";

export const CarDetailsFavSection: FC = () => {
  const theme = useTheme();
  return (
    <CarFavSection borderColor={theme.palette.secondary.light}>
      <p>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </p>
      <ButtonWrapper>
        <CustomButton text="Save" clickHandler={() => {}} />
      </ButtonWrapper>
    </CarFavSection>
  );
};
