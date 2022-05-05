import { Link } from "react-router-dom";

export const NavItem = ({ text, link }: any) => (
  <li>
    <Link to={link}>{text}</Link>
  </li>
);
