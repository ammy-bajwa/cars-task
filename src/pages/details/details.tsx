// import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
  DetailsWrapper,
  CarDetailsSectionWrapper,
  CarDetailsSection,
  CarFavSection,
  CarImgSection,
} from ".";

export const Details = () => {
  // const theme = useTheme();

  return (
    <DetailsWrapper>
      <CarImgSection src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80" />
      <CarDetailsSectionWrapper>
        <CarDetailsSection>
          <h1>Chrysler Crossfire</h1>
          <h3>Stock # 61184 - 152.263 KM - Petrol - Yellow</h3>
          <p>
            This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in this
            page are not definitive and may change due to bad weather conditions
          </p>
        </CarDetailsSection>
        <CarFavSection>
          <p>
            If you like this car, click the button and save it in your
            collection of favourite items.
          </p>
          <Button variant="contained">Save</Button>
        </CarFavSection>
      </CarDetailsSectionWrapper>
    </DetailsWrapper>
  );
};
