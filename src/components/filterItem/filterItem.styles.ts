import styled from "@emotion/styled";
import { FilterItemWrapperProps } from ".";

export const FilterItemWrapper = styled.div<FilterItemWrapperProps>`
  width: 300px;
  margin: 20px 0px;
  select {
    border-radius: 2px;
    color: ${(props) => props?.color};
    border: ${(props) => `2px solid ${props?.borderColor}`};
    padding: 0px 10px;
    height: 40px;
    margin-top: 10px;
    width: 100%;
  }
  span {
    font-size: 16px;
    color: ${(props) => props?.color};
    margin-bottom: 5px;
  }
`;
