import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/Poveda-Logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const [scrolling, setScrolling] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);

  const menuClick = () => {
    setOpenMenu(!openMenu);
    setShowSubItems(false);
  };

  const handleShowItems = () => {
    setShowSubItems(!showSubItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      label: "PRICING",
      path: "/pricing",
    },
    {
      label: "VISIT",
      path: "/visit",
      subItems: [
        { label: "ADVENTURE", path: "/adventure" },
        { label: "CULTURE", path: "/culture" },
        { label: "RELAX", path: "/relax" },
      ],
    },
    {
      label: "ABOUT US",
      path: "/about-us",
    },
    {
      label: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <div
      className={`flex items-center justify-center w-full z-10 p-4 sm:px-8 xl:px-0 md:py-8 fixed ${
        openMenu ? " bg-MediumGreenishGray" : ""
      } ${scrolling ? "bg-MediumGreenishGray shadow-xl" : "bg-none"}`}
    >
      <header className="w-full xl:w-[1240px] mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[70px] md:w-auto" />
        </Link>
        <ul
          className={`gap-10 text-sm font-medium tracking-widest text-white font-Poppins ${
            !isDesktop && openMenu
              ? "bg-MediumGreenishGray absolute left-0 w-full translate-y-full bottom-0 flex flex-col px-4 py-6 gap-6 items-end"
              : "hidden md:flex"
          }`}
        >
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className={`relative ${
                menuItem.subItems
                  ? "border-b border-transparent cursor-pointer group"
                  : ""
              }`}
            >
              <NavLink
                to={menuItem.path}
                className={`flex items-center gap-3 hover-line ${
                  openMenu && "flex-row-reverse"
                }`}
              >
                <span onClick={() => setOpenMenu(false)}>{menuItem.label}</span>
                {menuItem.subItems && (
                  <button
                    onClick={handleShowItems}
                    className={`transition duration-300 ease lg:group-hover:rotate-180 ${
                      showSubItems
                        ? "transition duration-300 rotate-180 ease"
                        : "rotate-0"
                    }`}
                  >
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                )}
              </NavLink>
              {menuItem.subItems && (
                <ul
                  className={`flex-col items-end gap-6 lg:gap-3 pt-6 pr-4 transition duration-300 rounded-lg lg:p-5 lg:shadow-2xl lg:bg-MediumGreenishGray top-5 ease lg:absolute lg:items-start ${
                    showSubItems ? "flex" : "hidden lg:group-hover:flex"
                  } `}
                >
                  {menuItem.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={() => setOpenMenu(false)}>
                      <NavLink to={subItem.path} className="hover-line">
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <button
          id="menu-icon"
          className={`relative z-[1000] w-10 h-10 flex md:hidden justify-center flex-col gap-1.5 items-center  ${
            openMenu && "active_menu"
          }`}
          onClick={menuClick}
        >
          <span className="z-20 w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
          <span className="z-20 w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
          <span className="z-20 w-6 h-0.5 bg-white transition-transform duration-300 ease-out" />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
