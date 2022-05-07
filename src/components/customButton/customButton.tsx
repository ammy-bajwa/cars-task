import { FC } from "react";
import { useTheme } from "@mui/material/styles";

import { CustomButtonWrapper } from ".";

interface CustomButtonProps {
  text: string;
  clickHandler: any;
}

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
