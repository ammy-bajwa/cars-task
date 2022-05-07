import styled from "@emotion/styled";

interface HomeWrapperProps {}

export const HomeWrapper = styled.div<HomeWrapperProps>`
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  @media screen and (max-width: 750px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const HomeCarsSection = styled.div`
  display: "inline-block";
  margin-left: 20px;
  width: 70%;
  @media screen and (max-width: 750px) {
    margin-top: 50px;
    width: 100%;
  }
`;

export const HomeHeading = styled.h2`
  display: "inline-block";
  margin-top: 0px;
`;
