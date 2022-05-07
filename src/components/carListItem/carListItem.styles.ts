import styled from "@emotion/styled";
import { CarListItemWrapperProps } from ".";


export const CarListItemWrapper = styled.div<CarListItemWrapperProps>`
  border: ${(props) => `1px solid ${props?.borderColor}`};
  margin: 10px 0px;
  display: flex;
  justify-content: start;
  align-content: center;
  padding: 10px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
  span {
    color: ${(props) => props?.primary};
  }
`;

export const CarListItemInfoWrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
