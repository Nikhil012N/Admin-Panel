"use client";

import React from "react";
import {CustomerFeedback,RecentOrders,ListComponent,ActivityGraph,NetProfitCard,Dashboard} from "@/components/dashboard"

const Page = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 pt-20">
      <div className="text-3xl lg:col-span-4 p-4 font-extrabold">Dashboard</div>
      <div className="lg:col-span-3">
        <Dashboard />
      </div>
      <div className="lg:col-span-1">
        <NetProfitCard />
      </div>
      <div className="lg:col-span-3">
        <ActivityGraph />
      </div>
      <div className="lg:col-span-1">
        <ListComponent />
      </div>
      <div className="lg:col-span-3 lg:row-span-2">
        <RecentOrders />
      </div>
      <div className="lg:col-span-1 lg:row-span-2">
        <CustomerFeedback />
      </div>
    </div>
  );
};

export default Page;
