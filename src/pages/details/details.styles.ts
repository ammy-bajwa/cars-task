import styled from "@emotion/styled";

interface DetailsWrapperProps {}

export const DetailsWrapper = styled.div<DetailsWrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const CarImgSection = styled.img`
  height: 40vh;
  object-fit: cover;
  width: 100%;
`;
