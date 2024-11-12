import React from "react";
import { logo } from "../assets/images";

const Header = () => {
  return (
    <div className="nav">
      <header className="flex justify-between items-center p-4  max-w-[1231px] mx-auto text-white">
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12  cursor-pointer w-12 hover:transition-all hover:scale-110 hover:duration-300 hover:ease-in-out"
          />
        </div>
        <nav>
          <ul className="flex space-x-8 text-[#3d4152]">
            <li>
              <a
                href="#"
                className=" hover:text-primary transition-all duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-primary transition-all duration-300 ease-in-out"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-primary transition-all duration-300 ease-in-out"
              >
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
