import NavItems from "./NavItems";

const Navbar = ({ isOpen }) => {
  const navItems = [
    { id: 1, path: "/v1/api/about", label: "About Me" },
    { id: 2, path: "/v1/api/Project", label: "Projects " },
    { id: 3, path: "/v1/api/contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`absolute left-0 top-[100%] w-full bg-gray-500 bg-opacity-50 h-[50vh] justify-center pt-[40px] transform duration-1000 ${
        isOpen
          ? "opacity-100 translate-x-0 z-50"
          : "opacity-0 translate-x-full z-[-1]"
      } md:flex items-center gap-8`}
    >
      <ul className="flex flex-col md:flex-row gap-8 items-center">
        {navItems.map((item) => (
          <li className="nav-link" key={item.id}>
            <NavItems path={item.path} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
