import NavItems from "./NavItems";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { id: 1, path: "/about", label: "About Me" },
    { id: 2, path: "/projects", label: "Projects" },
    { id: 3, path: "/contact", label: "Contact Me" },
  ];

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`absolute right-4 top-full w-[calc(100%-2rem)] rounded-xl border border-white/10 bg-[#111113] shadow-2xl transition-all duration-300 md:right-8 md:w-[280px] ${isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-4 opacity-0"
        }`}
    >
      <ul className="flex flex-col gap-2 p-4">
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