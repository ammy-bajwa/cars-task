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

export const CarDetailsSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px 0px;
`;

export const CarDetailsSection = styled.div`
  width: 40%;
`;

export const CarFavSection = styled.div`
  width: 30%;
`;
