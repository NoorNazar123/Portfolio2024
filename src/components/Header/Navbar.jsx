import NavItems from "./NavItems";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { id: 1, path: "/", label: "Home" },
    { id: 2, path: "/about", label: "About" },
    { id: 3, path: "/projects", label: "Projects" },
    { id: 4, path: "/contact", label: "Contact" },
  ];

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        absolute right-4 top-full mt-3 w-[calc(100%-2rem)]
        rounded-xl border border-white/10 bg-[#111113]
        shadow-2xl transition-all duration-300
        md:static md:mt-0 md:w-auto md:rounded-none
        md:border-0 md:bg-transparent md:shadow-none
        md:opacity-100 md:visible md:translate-y-0
        ${isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-4 opacity-0"
        }
      `}
    >
      <ul
        className="
          flex flex-col gap-2 p-4
          md:flex-row md:items-center md:gap-8 md:p-0
        "
      >
        {navItems.map((item) => (
          <li key={item.id} onClick={closeNav}>
            <NavItems path={item.path} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;