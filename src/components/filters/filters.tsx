import { useTheme } from "@mui/material/styles";
import { FiltersWrapper } from ".";
import { FilterItem } from "../filterItem";

export const Filters = () => {
  const theme = useTheme();

  return (
    <FiltersWrapper borderColor={theme.palette.secondary.light}>
      <FilterItem title="Color" />
      <FilterItem title="Manufacture" />
    </FiltersWrapper>
  );
};
