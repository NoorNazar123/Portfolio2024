import { NavLink } from "react-router-dom";

const NavItems = ({ path, label }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `block rounded-lg px-4 py-3 text-sm font-medium transition ${isActive
        ? "bg-white/10 text-white"
        : "text-zinc-400 hover:bg-white/5 hover:text-white"
      }`
    }
  >
    {label}
  </NavLink>
);

export default NavItems;