import { Filters, CarList } from "../../components";

import { HomeWrapper, HomeHeading, HomeCarsSection } from ".";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCars } from "../../store";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useAppDispatch();

  const totalCarsCount = useAppSelector(
    (globalStore) => globalStore?.cars?.totalCarsCount
  );
  const totalPageCount = useAppSelector(
    (globalStore) => globalStore?.cars?.totalPageCount
  );

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <Filters />
      <HomeCarsSection>
        <HomeHeading>Available Cars</HomeHeading>
        <h3>
          Show {totalCarsCount} of {totalPageCount * totalCarsCount} results
        </h3>
        <CarList />
      </HomeCarsSection>
    </HomeWrapper>
  );
};
