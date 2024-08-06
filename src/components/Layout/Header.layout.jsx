"use client";
import Image from "next/image";
import { useState } from "react";
import { DiAptana } from "react-icons/di";
import { MdOutlineMail } from "react-icons/md";
import { RxMagnifyingGlass } from "react-icons/rx";
import { VscBellDot } from "react-icons/vsc";
import avtar from "@/assets/avtar.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="w-full  bg-neutral-900 fixed top-0 left-0 z-50">
      <nav className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center space-x-4">
          <div className="relative bg-gray-700   ml-16 rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <RxMagnifyingGlass className="text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 bg-gray-700 border border-gray-600 rounded-md text-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-4`}>
            <ul className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0 bg-gray-800 md:bg-transparent p-2 md:p-0 rounded-lg md:rounded-none">
              <li>
                <button className="flex items-center justify-center p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <MdOutlineMail />
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <DiAptana />
                </button>
              </li>
              <li>
                <button className="flex items-center justify-center p-2 bg-gray-700 rounded-full text-gray-300 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <VscBellDot />
                </button>
              </li>
              <li className="flex items-center justify-center">
                <Image className="h-8 w-8 rounded-full" src={avtar} alt="avatar" width={30} height={30} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isSearchOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-gray-800 p-4 z-50">
          <div className="relative bg-gray-700 p-2 rounded-md">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <RxMagnifyingGlass className="text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 bg-gray-700 border border-gray-600 rounded-md text-gray-300 shadow-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
