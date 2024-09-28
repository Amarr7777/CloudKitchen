import React from "react";
import menuLogo from "../../assets/menu.svg";
import orderLogo from "../../assets/order.svg";
import addLogo from "../../assets/add.svg";
import logoutLogo from "../../assets/logout.svg";

function SideBar({ viewportHeight, setIndex }) {
  return (
    <div
      className="hidden md:block bg-white"
      style={{ height: `${viewportHeight}px` }}
    >
      <ul
        className="flex flex-col w-full items-center justify-start mt-1 space-y-1 px-4 gap-5 pt-5 relative "
        style={{ height: `${viewportHeight * 0.9}px` }}
      >
        {/* add item */}
        <li
          onClick={() => {
            setIndex(0);
          }}
          className="hover:scale-110 cursor-pointer group "
        >
          <img src={addLogo} alt="" />
          <p className="absolute text-nowrap left-10 top-1 hidden group-hover:flex font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Add item
          </p>
        </li>
        {/* menu */}
        <li
          onClick={() => {
            setIndex(1);
          }}
          className="hover:scale-110 cursor-pointer group"
        >
          <img src={menuLogo} alt="" />
          <p className="absolute left-10 top-1 hidden group-hover:flex font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            menu
          </p>
        </li>
        {/* order */}
        <li
          onClick={() => {
            setIndex(2);
          }}
          className="hover:scale-110 cursor-pointer group"
        >
          <img src={orderLogo} alt="" />
          <p className="absolute left-10 top-1 hidden group-hover:flex font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Orders
          </p>
        </li>
        {/* logout */}
        <li
          onClick={() => {
            setIndex(2);
          }}
          className="hover:scale-110 cursor-pointer group absolute bottom-0"
        >
          <img src={logoutLogo} alt="" />
          <p className="absolute left-10 top-1 hidden group-hover:flex font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
