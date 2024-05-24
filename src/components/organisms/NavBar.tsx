import React from "react";

const NavBar = () => {
  return (
    <header className="fixed flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4">
      <img src="/logo.png" alt="logo" className="w-14 " />
    </header>
  );
};

export default NavBar;
