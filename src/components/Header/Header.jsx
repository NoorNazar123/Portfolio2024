import React, { useState } from "react";
import Navbar from "./Navbar";
import SocialLinks from "./SocialLinks";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbartoggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="layout">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
                  Noor e Nazar
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  Developer · Builder
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop / Mobile Navigation */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Social links */}
            <div className="hidden md:block">
              <SocialLinks />
            </div>

            {/* Menu button */}
            <button
              type="button"
              onClick={navbartoggle}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
            >
              <span
                className={`h-px w-5 bg-white transition duration-300 ${isOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
              />

              <span
                className={`h-px w-5 bg-white transition duration-300 ${isOpen ? "opacity-0" : ""
                  }`}
              />

              <span
                className={`h-px w-5 bg-white transition duration-300 ${isOpen ? "-translate-y-[3px] -rotate-45" : ""
                  }`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;