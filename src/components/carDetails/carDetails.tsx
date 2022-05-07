import { FC } from "react";
import { useTheme } from "@mui/material/styles";

import { CarDetailsSectionWrapper } from ".";
import { CarDetailsInfoSection, CarDetailsFavSection } from "..";

export const CarDetails: FC = () => {
  const theme = useTheme();
  
  return (
    <CarDetailsSectionWrapper color={theme.palette.secondary.main}>
      <CarDetailsInfoSection />
      <CarDetailsFavSection />
    </CarDetailsSectionWrapper>
  );
};
