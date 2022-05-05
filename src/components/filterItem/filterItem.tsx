import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { FilterItemWrapper } from ".";

interface FilterItemProps {
  title: string;
}

export const FilterItem: FC<FilterItemProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <FilterItemWrapper borderColor={theme.palette.secondary.light} color={theme.palette.secondary.main}>
      <span>{title}</span>
      <br />
      <select>
        <option value="v1">v1</option>
        <option value="v2">v2</option>
        <option value="v3">v3</option>
      </select>
    </FilterItemWrapper>
  );
};
