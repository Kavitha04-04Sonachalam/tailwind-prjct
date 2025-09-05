import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="padding-x py-6 fixed w-full z-50 bg-white shadow-md">
      <div className="max-container flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="w-[129px] h-[29px]"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center gap-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-gray-700"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Links */}
        <div className="hidden lg:flex gap-4 font-medium font-montserrat">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-slate-gray hover:text-gray-700 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;


