import { FC } from "react";
import { Link } from "react-router-dom";
import { NavbarProps } from ".";

export const NavItem: FC<NavbarProps> = ({ text, link }) => (
  <li data-testid="NavItem">
    <Link to={link}>{text}</Link>
  </li>
);
