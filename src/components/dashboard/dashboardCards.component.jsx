import React from 'react';

import { TbShoppingBagPlus,TbShoppingBagX,TbShoppingBagCheck } from "react-icons/tb";
import { BiDollarCircle } from "react-icons/bi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import {  } from "react-icons/tb";const data = [
  { icon: TbShoppingBagPlus, title: "Total Orders", value: 75, color: "blue", trend: "3%", trendColor: "green"  },
  { icon: TbShoppingBagCheck, title: "Total Delivered", value: 70, color: "green", trend: "3%", trendColor: "red"  },
  { icon: TbShoppingBagX, title: "Total Cancelled", value: 5, color: "red", trend: "3%", trendColor: "green"  },
  { icon: BiDollarCircle, title: "Total Revenue", value: "$12k", color: "yellow", trend: "3%", trendColor: "red"  }
];

const Card = ({ icon: Icon, title, value, color, trend, trendColor,index} ) => (
  <div className="relative flex flex-col h-48  bg-neutral-900 w-screen  text-white p-4 rounded-lg shadow-lg md:w-64 md:max-w-xs">
    <Icon className={`text-${color}-500 text-6xl  bg-${color}-200 rounded-lg `} />
    <h2 className="text-lg font-semibold mt-2 mb-1">{title}</h2>
    <p className="text-2xl font-bold">{value}</p>
    <div className="absolute bottom-2 right-2 flex items-center">
   { (index % 2 == 1)?<IoMdArrowDropdown className={`text-${trendColor}-500 mr-1 font-extrabold text-2xl`} />:<IoMdArrowDropup className={`text-${trendColor}-500 mr-1 font-extrabold text-2xl`}/>}
      
      <span className={`text-${trendColor}-500 text-sm`}>{trend}</span>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="flex flex-wrap justify-center gap-2 mx-auto">
    {data.map((item, index) => (
      <Card
        key={index}
        index={index}
        icon={item?.icon}
        title={item?.title}
        value={item?.value}
        color={item?.color}
        trend={item?.trend}
        trendColor={item?.trendColor}
      />
    ))}
  </div>
);

export default Dashboard;
