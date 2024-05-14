"use client";

import { useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";
import { NavBarLinks } from "./NavBarLinks";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <div>
            <Image width={100} height={50} src="/images/LOGO1.png" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <NavBarLinks />
            <MainButton
              text="Sign in"
              classes="bg-white text-black border-[2px] border-gray-300 shadow-lg hover:bg-white"
            />
            <MainButton text="Get Started" />
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          isMenuOpen ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/LOGO1.png" alt="logo" className="w-[5rem]" />
          </div>
          <div className="flex items-center gap-[40px]">
            {isMenuOpen ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {isMenuOpen ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <NavBarLinks />
              <MainButton
                text="Sign in"
                classes="bg-white text-black border-[2px] border-gray-300 shadow-lg hover:bg-white"
              />
              <MainButton text="Get Started" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
