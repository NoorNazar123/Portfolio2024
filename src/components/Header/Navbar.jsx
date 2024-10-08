import NavItems from "./NavItems";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { id: 1, path: "/api/v1/noor-e-nazar/about", label: "About Me" },
    { id: 2, path: "/api/v1/noor-e-nazar/Project", label: "Projects " },
    { id: 3, path: "/api/v1/noor-e-nazar/contact", label: "Contact Me" },
  ];

  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
      <nav
        className={`absolute right-2  top-[110%]  rounded-lg w-[96%] md:w-[20%] bg-white md:h-[60vh] justify-center py-[40px] z-[-1] duration-1000 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full md:-translate-y-full  "
        } md:flex items-center gap-8 ]`}
      >
        <ul className="flex flex-col  gap-8 items-center">
          {navItems.map((item) => (
            <li className="nav-link" key={item.id} onClick={closeNav}>
              <NavItems path={item.path} label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
