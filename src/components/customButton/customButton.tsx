import { FC } from "react";
import { useTheme } from "@mui/material/styles";

import { CustomButtonProps, CustomButtonWrapper } from ".";

export const CustomButton: FC<CustomButtonProps> = ({ text, clickHandler }) => {
  const theme = useTheme();

  return (
    <CustomButtonWrapper
      bgColor={theme.palette.primary.main}
      onClick={clickHandler}
    >
      {text}
    </CustomButtonWrapper>
  );
};
