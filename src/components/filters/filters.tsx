import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { FiltersButtonWrapper, FiltersWrapper } from ".";
import { FilterItem, CustomButton } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getCars,
  getColorsList,
  getManufactures,
  carsActions,
} from "../../store";

export const Filters = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const colors = useAppSelector((globalStore) => globalStore?.cars?.colors);

  const { manufacturers, selectedColor, selectedManufacturer } = useAppSelector(
    (globalStore) => globalStore?.cars
  );

  useEffect(() => {
    dispatch(getColorsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getManufactures());
  }, [dispatch]);

  useEffect(() => {
    if (colors?.length) {
      dispatch(carsActions.setSelectedColor(colors[0]));
    }
  }, [colors, dispatch]);

  useEffect(() => {
    if (manufacturers?.length) {
      dispatch(carsActions.setSelectedManufacturer(manufacturers[0]));
    }
  }, [manufacturers, dispatch]);

  const onColorChange = (event: any) => {
    dispatch(carsActions.setSelectedColor(event?.target?.value));
  };

  const onManufacturerChange = (event: any) => {
    dispatch(carsActions.setSelectedManufacturer(event?.target?.value));
  };

  const filterHandler = () => {
    dispatch(
      getCars({
        color: selectedColor,
        manufacturer: selectedManufacturer,
        pageNum: 1,
      })
    );
  };

  return (
    <FiltersWrapper borderColor={theme.palette.secondary.light}>
      <FilterItem
        title="Color"
        options={colors}
        onChangeHandler={onColorChange}
      />
      <FilterItem
        title="Manufacture"
        options={manufacturers}
        onChangeHandler={onManufacturerChange}
      />
      <FiltersButtonWrapper>
        <CustomButton text="Filter" clickHandler={filterHandler} />
      </FiltersButtonWrapper>
    </FiltersWrapper>
  );
};
