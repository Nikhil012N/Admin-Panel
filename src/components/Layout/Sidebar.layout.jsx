"use client";
import Link from "next/link";
import { useState } from "react";
import { LuClipboardCheck } from "react-icons/lu";
import { RiLogoutCircleRLine, RiBarChartBoxLine, RiWallet3Line } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";

const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  const iconClasses = (icon) =>
    `flex items-center justify-center h-12 w-12 ${
      selectedIcon === icon ? 'text-indigo-500 border-indigo-500' : 'text-gray-300 border-transparent'
    }`;

  return (
    <aside className="fixed top-0 left-0 h-full w-16 flex flex-col text-gray-300 bg-neutral-900 transition-width duration-300 z-50">
      <div className="flex flex-col items-center overflow-y-auto h-full pt-4">
        <Link href="#" className="mb-8">
          <Image src={LogoImg} alt="logo" width={40} height={40} />
        </Link>
        <ul className="flex flex-col space-y-4 flex-grow">
          <li>
            <button
              onClick={() => handleIconClick('home')}
              className={`${iconClasses('home')} border-l-4`}
            >
              <AiFillHome className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleIconClick('chart')}
              className={`${iconClasses('chart')} border-l-4`}
            >
              <RiBarChartBoxLine className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleIconClick('clipboard')}
              className={`${iconClasses('clipboard')} border-l-4`}
            >
              <LuClipboardCheck className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleIconClick('wallet')}
              className={`${iconClasses('wallet')} border-l-4`}
            >
              <RiWallet3Line className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handleIconClick('faClipboard')}
              className={`${iconClasses('faClipboard')} border-l-4`}
            >
              <FaClipboardCheck className="w-6 h-6" />
            </button>
          </li>
        </ul>
        <ul className="flex flex-col space-y-4 mt-auto mb-8">
          <li>
            <button
              onClick={() => handleIconClick('logout')}
              className={`${iconClasses('logout')} border-l-4`}
            >
              <RiLogoutCircleRLine className="w-6 h-6" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
