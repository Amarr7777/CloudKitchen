import React from "react";
function SideBar({ viewportHeight }) {
  return (
    <div
      className="hidden md:block border-r border-primary"
      style={{ height: `${viewportHeight}px` }}
    >
      <ul className="pt-2 space-y-1 px-4">
        <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
          Add Item
        </li>
        <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
          List Item
        </li>
        <li className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer">
          Orders
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
