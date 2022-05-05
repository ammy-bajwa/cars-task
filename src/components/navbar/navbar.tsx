import Logo from "../../img/logo.png";

import { NavbarWrapper, NavbarListWrapper } from ".";
import { NavItem } from "..";

export const Navbar = () => (
  <NavbarWrapper>
    <img src={Logo} height={"40px"} alt="logo" />
    <NavbarListWrapper>
      <NavItem text="Purchases" link="/" />
      <NavItem text="My Orders" link="/" />
      <NavItem text="Sell" link="/" />
    </NavbarListWrapper>
  </NavbarWrapper>
);
