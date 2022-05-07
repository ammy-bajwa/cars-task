import styled from "@emotion/styled";
import { NavbarWrapperProps } from ".";

export const NavbarWrapper = styled.nav<NavbarWrapperProps>`
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props?.borderColor}`};
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  a {
    color: ${(props) => props?.color};
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const NavbarListWrapper = styled.ul`
  display: flex;
  width: 45%;
  justify-content: space-evenly;
  list-style: none;
  max-width: 300px;
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;
