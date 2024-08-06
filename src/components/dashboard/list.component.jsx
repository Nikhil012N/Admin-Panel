import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineAim } from "react-icons/ai";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";

const ListComponent = () => {
  const items = [
    {
      name: 'Goal',
      icon: <AiOutlineAim />,
      color: 'text-red-500 bg-red-100',
    },
    {
      name: 'Popular Dishes',
      icon: <LiaHamburgerSolid />,
      color: 'text-blue-500 bg-blue-100',
    },
    {
      name: 'Main Menu',
      icon: <BiDish />,
      color: 'text-green-500 bg-green-100',
    },
  ];

  return (
    <div className="w-full h-72 bg-neutral-900  p-6 rounded-lg overflow-hidden">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center justify-between p-4 bg-neutral-900  rounded-lg shadow-md flex-wrap">
            <div className="flex items-center space-x-3">
              <div className={`text-2xl rounded-full p-2 ${item.color}`}>
                {item.icon}
              </div>
              <span className="text-lg font-medium text-white">{item.name}</span>
            </div>
            <FaArrowRight className="text-gray-400" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
