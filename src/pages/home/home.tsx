// import { useTheme } from "@mui/material/styles";
import { Filters } from "../../components";
import { HomeWrapper, HomeHeading, HomeCarsSection } from ".";
import { CarList } from "../../components/carList";

export const Home = () => {
  // const theme = useTheme();

  return (
    <HomeWrapper>
      <Filters />
      <HomeCarsSection>
        <HomeHeading>Available Cars</HomeHeading>
        <h3>Show 10 of 100 results</h3>
        <CarList />
      </HomeCarsSection>
    </HomeWrapper>
  );
};
