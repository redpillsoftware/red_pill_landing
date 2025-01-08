import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["About", "Portfolio", "Services", "Team", "Contact"];

  return (
    <nav className="fixed w-[calc(100%-2rem)] mx-4 my-3 bg-transparent  backdrop-blur-lg z-50 border-2 border-black/50  rounded-none md:rounded-full hover:bg-stone-900 transition-colors duration-300 hover:shadow-[0_0_20px_4px_rgba(239,68,68,0.8)]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-red-400 text-2xl font-bold tracking-tight">
            Red Pill Software
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                className="text-gray-300 hover:text-red-500 transition-colors font-sans"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-red-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  className="text-gray-300 hover:text-red-500 transition-colors font-sans text-center"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
