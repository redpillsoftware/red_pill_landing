import React from "react";

function Header() {
  return (
    <nav className="fixed w-[calc(100%-2rem)] my-3 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center overflow-hidden rounded-full  border border-white/30 shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]">
        {/* Left Half - Red */}
        <div className="w-1/2 bg-red-500 px-4 py-4 flex items-center justify-start">
          <h1 className="text-white text-xl font-bold tracking-tight">
            Red Pill Software
          </h1>
        </div>

        {/* Right Half - Black */}
        <div className="w-1/2 bg-black px-4 py-4 flex justify-end space-x-6">
          {["About", "Portfolio", "Services", "Team", "Contact"].map((item) => (
            <a
              key={item}
              className="text-gray-300 hover:text-red-500 transition-colors font-sans text-lg"
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
