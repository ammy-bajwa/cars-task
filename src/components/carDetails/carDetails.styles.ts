import styled from "@emotion/styled";
import { CarDetailsSectionWrapperType } from ".";

export const CarDetailsSectionWrapper = styled.div<CarDetailsSectionWrapperType>`
  display: flex;
  justify-content: space-around;
  margin: 20px 0px;
  width: 100%;
  h1 {
    font-size: 50px;
  }
  h1,
  p,
  h3 {
    font-weight: 600;
    color: ${(props) => props.color};
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
