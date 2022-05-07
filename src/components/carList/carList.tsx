import { CarListWrapper } from ".";
import { CarListItem } from "..";
import { useAppSelector } from "../../hooks";

export const CarList = () => {
  const { cars, loading } = useAppSelector((globalStore) => globalStore.cars);

  const carsRenderer = () => {
    if (loading) {
      return "Loading.........";
    }
    return cars?.length
      ? cars.map((car) => <CarListItem data={car} key={car?.stockNumber} />)
      : "No Car Found";
  };

  return (
    <CarListWrapper data-testid="CarList">{carsRenderer()}</CarListWrapper>
  );
};
