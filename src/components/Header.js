import React from "react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-[calc(100%-2rem)] my-3 z-50">
      <div className="max-w-7xl mx-auto flex items-center overflow-hidden rounded-full border border-white/30 shadow-[0_0_8px_2px_rgba(255,255,255,0.8)] bg-black md:flex-row">
        {/* Left Half - Red */}
        <div className="w-full md:w-1/2 bg-black px-4 py-4 flex items-center justify-between md:justify-start">
          <h1 className="text-red-500 text-2xl font-bold tracking-tight">
            Red Pill Software
          </h1>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Right Half - Links */}
        <div
          className={`w-full md:w-1/2 bg-black px-4 py-4 md:flex md:justify-end md:space-x-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {["About", "Portfolio", "Services", "Team", "Contact"].map((item) => (
            <a
              key={item}
              className="block md:inline-block text-gray-300 hover:text-red-500 transition-colors font-sans text-lg py-1"
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
    // <nav className="fixed w-[calc(100%-2rem)] mx-4 my-2 bg-black/80 backdrop-blur-sm z-50 shadow-md rounded-full border border-white/50 shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]">
    //   <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    //     <h1 className="text-red-500 text-2xl font-bold tracking-tight">
    //       Red Pill Software
    //     </h1>
    //     <div className="space-x-6">
    //       {["About", "Portfolio", "Services", "Team", "Contact"].map((item) => (
    //         <a
    //           key={item}
    //           className="text-gray-300 hover:text-red-500 transition-colors font-sans"
    //           href={`#${item.toLowerCase()}`}
    //         >
    //           {item}
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Header;
