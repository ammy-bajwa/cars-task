import styled from "@emotion/styled";

interface CarListItemWrapperProps {
  color: string;
  borderColor: string;
}

export const CarListItemWrapper = styled.div<CarListItemWrapperProps>`
  border: ${(props) => `1px solid ${props?.borderColor}`};
  margin: 10px 0px;
  display: flex;
  justify-content: start;
  align-content: center;
  padding: 10px;
  width: auto;
`;
