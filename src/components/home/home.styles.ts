import styled from "@emotion/styled";

interface HomeWrapperProps {}

export const HomeWrapper = styled.div<HomeWrapperProps>`
  padding: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HomeCarsSection = styled.div`
  display: "inline-block";
  margin-left: 20px;
`;

export const HomeHeading = styled.h2`
  display: "inline-block";
  margin-top: 0px;
`;
