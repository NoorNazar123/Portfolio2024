import NavItems from "./NavItems";

const Navbar = ({ isOpen }) => {
  const navItems = [
    { id: 1, path: "/api/v1/noor-e-nazar/about", label: "About Me" },
    { id: 2, path: "/api/v1/noor-e-nazar/Project", label: "Projects " },
    { id: 3, path: "/api/v1/noor-e-nazar/contact", label: "Contact Me" },
  ];

  return (
    <nav
      className={`absolute right-0 md:right-2  top-[110%] rounded-lg w-full md:w-[20%] bg-white bg-opacity-90 min-h-[80vh] md:h-[60vh] justify-center pt-[40px] transform duration-1000 ${
        isOpen
          ? "opacity-100 translate-x-0 z-50"
          : "opacity-0 translate-x-full z-[-1]"
      } md:flex items-center gap-8`}
    >
      <ul className="flex flex-col  gap-8 items-center">
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
