import styled from "@emotion/styled";
import { CustomButtonWrapperType } from ".";

export const CustomButtonWrapper = styled.button<CustomButtonWrapperType>`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 2px;
  color: white;
  padding: 10px 45px;
  transition: all 0.5s;
  width: auto;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0px 1px 5px black;
  }
`;
