import { useTheme } from "@mui/material/styles";
import { FiltersWrapper } from ".";
import { FilterItem, CustomButton } from "..";

export const Filters = () => {
  const theme = useTheme();

  return (
    <FiltersWrapper borderColor={theme.palette.secondary.light}>
      <FilterItem title="Color" />
      <FilterItem title="Manufacture" />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
        }}
      >
        <CustomButton text="Filter" clickHandler={true} />
      </div>
    </FiltersWrapper>
  );
};
