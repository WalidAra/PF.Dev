import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="fixed flex z-30 w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4">
      <Link to={"/"}>
        <img src="/logo.png" alt="logo" className="w-14 " />
      </Link>
    </header>
  );
};

export default NavBar;
