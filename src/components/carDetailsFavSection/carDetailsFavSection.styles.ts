import styled from "@emotion/styled";
import { CarFavSectionProps } from ".";

export const CarFavSection = styled.div<CarFavSectionProps>`
  border: ${(props) => `1px solid ${props?.borderColor}`};
  border-radius: 2px;
  padding: 20px;
  word-break: break-word;
  width: 20%;
  @media screen and (max-width: 900px) {
    width: 60%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
