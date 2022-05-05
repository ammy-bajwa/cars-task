import Logo from "../../img/logo.png";

import { useTheme } from "@mui/material/styles";
import { NavbarWrapper, NavbarListWrapper } from ".";
import { NavItem } from "..";

export const Navbar = () => {
  const theme = useTheme();

  return (
    <NavbarWrapper
      primary={theme.palette.primary.main}
      color={theme.palette.secondary.main}
    >
      <img src={Logo} height={"40px"} alt="logo" />
      <NavbarListWrapper>
        <NavItem text="Purchases" link="/" />
        <NavItem text="My Orders" link="/" />
        <NavItem text="Sell" link="/" />
      </NavbarListWrapper>
    </NavbarWrapper>
  );
};
