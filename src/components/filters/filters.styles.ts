import styled from "@emotion/styled";

interface FiltersWrapperProps {
  borderColor: string;
}

export const FiltersWrapper = styled.div<FiltersWrapperProps>`
  display: inline-block;
  border: ${(props) => `1px solid ${props?.borderColor}`};
  border-radius: 2px;
  padding: 20px;
  width: auto;
`;

export const FiltersButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
