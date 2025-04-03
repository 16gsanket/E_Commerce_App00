import React from "react";
import { useSidebar } from "../context/SidebarProvider ";

function Sidebar() {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`fixed top-[56px] left-0 h-[100dvh] w-[50dvw] bg-red-200 transition-transform duration-300 ${
        isSidebarOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
      }`}
    >
      <div className="h-[50px] w-full">
        <h1 className="text-center text-2xl">FILTERS</h1>
      </div>
    </div>
  );
}

export default Sidebar;