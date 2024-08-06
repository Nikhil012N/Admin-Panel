import { Header, Sidebar } from "@/components/Layout";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto ml-16 mr-4 ">
      
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
