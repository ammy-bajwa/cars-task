import { DetailsWrapper, CarImgSection } from ".";
import { CarDetails } from "../../components";
import { useAppSelector } from "../../hooks";

import NoCarImg from "../../img/noCar.png";

export const Details = () => {
  const currentCar = useAppSelector(
    (globalStore) => globalStore?.cars?.currentCar
  );

  return (
    <DetailsWrapper>
      <CarImgSection src={currentCar?.pictureUrl || NoCarImg} />
      <CarDetails />
    </DetailsWrapper>
  );
};
