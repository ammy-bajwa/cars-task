import { Filters, CarList, CustomButton } from "../../components";

import { HomeWrapper, HomeHeading, HomeCarsSection } from ".";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { carsActions, getCars, getMoreCars } from "../../store";
import { useEffect } from "react";

export const Home = () => {
  const dispatch = useAppDispatch();

  const {
    totalCarsCount,
    totalPageCount,
    loading,
    selectedColor,
    selectedManufacturer,
    currentPage,
    cars,
  } = useAppSelector((globalStore) => globalStore?.cars);

  useEffect(() => {
    dispatch(getCars({}));
  }, [dispatch]);

  const loadMoreHandler = () => {
    if (currentPage < totalPageCount) {
      dispatch(
        getMoreCars({
          pageNum: currentPage + 1,
          color: selectedColor,
          manufacturer: selectedManufacturer,
        })
      );
      dispatch(carsActions.setCurrentPage(currentPage + 1));
    }
  };

  return (
    <HomeWrapper>
      <Filters />
      <HomeCarsSection>
        <HomeHeading>Available Cars</HomeHeading>
        <h3>
          Show {cars?.length} of {totalCarsCount} results
        </h3>
        <CarList />
        {!loading && totalPageCount > currentPage && (
          <CustomButton text="Load More" clickHandler={loadMoreHandler} />
        )}
      </HomeCarsSection>
    </HomeWrapper>
  );
};
