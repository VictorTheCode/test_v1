"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/lab", label: "Lab" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container" ref={container}>
      {/* Menu Bar */}
      <div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center z-[1]">
        <div className="menu-logo">
          <Link className="text-white cursor-pointer" href={"/"}>
            VNXN
          </Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p className="text-white cursor-pointer">Menu</p>
        </div>
      </div>
      {/* Menu Overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen p-8 bg-[#c5fb45] flex justify-between items-center z-[2]">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={"/"}>VNXN</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className="text-black cursor-pointer">Close</p>
          </div>
        </div>
        <div className="flex-[2] flex items-end cursor-pointer">
          <p>&#x2715;</p>
        </div>

        {/* Menu Copy */}
        <div className="flex-[4] flex flex-col justify-between pt-8">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder">
                  <Link
                    href={link.path}
                    className="menu-link"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Menu Info Links */}
          <div className="menu-info">
            <div className="menu-info-col">
              <a className="uppercase text-sm leading-[100%]" href="#">
                &#8599;
              </a>
              <a
                className="uppercase text-black text-sm leading-[100%]"
                href="#"
              >
                Instagram &#8599;
              </a>
              <a
                className="uppercase text-black text-sm leading-[100%]"
                href="#"
              >
                LinkedIn &#8599;
              </a>
              <a
                className="uppercase text-black text-sm leading-[100%]"
                href="#"
              >
                Behance &#8599;
              </a>
              <a
                className="uppercase text-black text-sm leading-[100%]"
                href="#"
              >
                Dribbble &#8599;
              </a>
            </div>
            {/* Menu Info */}
            <div className="menu-info-col">
              <p className="uppercase text-sm leading-[100%] text-black">
                info@codegrid.com
              </p>
              <p className="uppercase text-sm leading-[100%] text-black">
                2343 357 336
              </p>
            </div>
          </div>
        </div>
        {/* Preview */}
        <div className="flex-[4] flex justify-end items-end">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
