import { NavLink } from "react-router-dom";

const NavItems = ({ path, label }) => (
  <NavLink
    to={path}
    className={({ isActive }) => (isActive ? "text-[#191970] " : "text-[#000]")}
  >
    {label}
  </NavLink>
);
export default NavItems;
