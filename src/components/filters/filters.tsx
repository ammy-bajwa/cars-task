import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { FiltersButtonWrapper, FiltersWrapper } from ".";
import { FilterItem, CustomButton } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getCars, getColorsList, getManufactures } from "../../store";

export const Filters = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();

  const colors = useAppSelector((globalStore) => globalStore?.cars?.colors);

  const manufacturers = useAppSelector(
    (globalStore) => globalStore?.cars?.manufacturers
  );

  const [selectedColor, setSelectedColor] = useState("");

  const [selectedManufacturer, setSelectedManufacturer] = useState("");

  useEffect(() => {
    dispatch(getColorsList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getManufactures());
  }, [dispatch]);

  useEffect(() => {
    if (colors?.length) {
      setSelectedColor(colors[0]);
    }
  }, [colors]);

  useEffect(() => {
    if (manufacturers?.length) {
      setSelectedManufacturer(manufacturers[0]);
    }
  }, [manufacturers]);

  const onColorChange = (event: any) => {
    setSelectedColor(event?.target?.value);
  };

  const onManufacturerChange = (event: any) => {
    setSelectedManufacturer(event?.target?.value);
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
