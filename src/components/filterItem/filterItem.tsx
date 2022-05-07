import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { FilterItemWrapper } from ".";

interface FilterItemProps {
  title: string;
  options: string[];
  onChangeHandler: any;
}

export const FilterItem: FC<FilterItemProps> = ({
  title,
  options,
  onChangeHandler,
}) => {
  const theme = useTheme();

  return (
    <FilterItemWrapper
      borderColor={theme.palette.secondary.light}
      color={theme.palette.secondary.main}
    >
      <span>{title}</span>
      <br />
      <select onChange={onChangeHandler}>
        {options?.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </FilterItemWrapper>
  );
};
