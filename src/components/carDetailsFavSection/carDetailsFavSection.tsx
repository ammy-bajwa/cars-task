import { FC } from "react";
import { Button } from "@mui/material";

import { CarFavSection } from ".";

export const CarDetailsFavSection: FC = () => {
  return (
    <CarFavSection>
      <p>
        If you like this car, click the button and save it in your collection of
        favourite items.
      </p>
      <Button variant="contained">Save</Button>
    </CarFavSection>
  );
};
