import { Filters, CarList, CustomButton } from "../../components";

import { HomeWrapper, HomeHeading, HomeCarsSection } from ".";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCars } from "../../store";
import { useEffect, useState } from "react";

export const Home = () => {
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { totalCarsCount, totalPageCount, loading } = useAppSelector(
    (globalStore) => globalStore?.cars
  );

  useEffect(() => {
    dispatch(getCars({}));
  }, [dispatch]);

  const loadMoreHandler = () => {
    if (currentPage < totalPageCount) {
      dispatch(getCars({ pageNum: currentPage + 1 }));
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <HomeWrapper>
      <Filters />
      <HomeCarsSection>
        <HomeHeading>Available Cars</HomeHeading>
        <h3>
          Show {totalCarsCount} of {totalPageCount * totalCarsCount} results
        </h3>
        <CarList />
        {!loading && totalPageCount > currentPage && (
          <CustomButton text="Load More" clickHandler={loadMoreHandler} />
        )}
      </HomeCarsSection>
    </HomeWrapper>
  );
};
