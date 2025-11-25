import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center h-[60px] w-full shadow-md px-5 md:px-0">
      <div className="flex w-full md:w-9/12 md:mx-auto justify-between">
        <h1 className="text-2xl text-orange-700 font-bold">CountryLens</h1>

        <nav className="hidden md:flex gap-6 md:gap-7">
          {["/", "about", "country", "contact"].map((path, index) => {
            const name =
              path === "/"
                ? "Home"
                : path.charAt(0).toUpperCase() + path.slice(1);
            return (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  `hover:text-blue-700 ${isActive ? "text-blue-700" : ""}`
                }
              >
                {name}
              </NavLink>
            );
          })}
        </nav>

        <button onClick={toggleMenu} className="cursor-pointer md:hidden">
          {isOpen ? <IoMdClose size={25} /> : <GiHamburgerMenu size={25} />}
        </button>
      </div>

      {/*dropdown menu */}
      {isOpen && (
        <ul
          className="flex flex-col items-center justify-center w-full bg-white absolute
          shadow-md top-[62px] left-0"
        >
          {["/", "about", "country", "contact"].map((path, index) => {
            const name =
              path === "/"
                ? "Home"
                : path.charAt(0).toUpperCase() + path.slice(1);

            return (
              <li key={index} className="my-2">
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `hover:text-blue-700 ${isActive ? "text-blue-700" : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
