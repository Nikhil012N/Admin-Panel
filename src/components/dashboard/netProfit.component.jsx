import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowDropup } from "react-icons/io";

const NetProfitCard = () => {
  const value = 70;

  return (
    <div className="flex flex-col md:flex-row bg-neutral-900 text-white p-5 rounded-lg shadow-lg">
      <div className="flex-1 mb-4 md:mb-0">
        <h2 className="text-sm font-semibold mb-2">Net Profit</h2>
        <p className="text-xl font-bold">$6753.25</p>
        <div className="flex items-center mt-4">
          <IoMdArrowDropup className="text-green-500 mr-2 font-extrabold text-2xl" />
          <span className="text-green-500 text-xl">3%</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-24 h-24 mb-2">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "rgba(82, 78, 183, 1)",
              trailColor: "grey",
              textSize: '8px',
              pathTransitionDuration: 0.5,
              strokeLinecap: 'butt',
              trailWidth: 8,
              pathWidth: 8,
            })}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[8px] top-4">
            Goal completed
          </div>
        </div>
        <p className="text-gray-400 mt-1 text-sm">* the value has been rounded off</p>
      </div>
    </div>
  );
};

export default NetProfitCard;
