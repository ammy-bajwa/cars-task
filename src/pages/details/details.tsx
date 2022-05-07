import { DetailsWrapper, CarImgSection } from ".";
import { CarDetails } from "../../components";

export const Details = () => {
  return (
    <DetailsWrapper>
      <CarImgSection src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80" />
      <CarDetails />
    </DetailsWrapper>
  );
};
