import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FiltersWrapper } from ".";
import { FilterItem } from "..";

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
        <Button variant="contained">Filter</Button>
      </div>
    </FiltersWrapper>
  );
};
