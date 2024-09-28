import React from "react";
import menuLogo from "../../assets/menu.svg";
import orderLogo from "../../assets/order.svg";
import addLogo from "../../assets/add.svg";
import logoutLogo from "../../assets/logout.svg";

function SidebarMobile({ viewportHeight, setIndex, setMenuVisible }) {
  return (
    <div className="md:hidden w-1/2 bg-gray-100 shadow-md backdrop-blur-sm h-full absolute z-10">
      <ul
        className="flex flex-col w-full md:items-center justify-start mt-1 space-y-1 px-4 gap-5 pt-10 md:pt-5 relative"
        style={{ height: `${viewportHeight}px` }}
      >
        {/* Add item */}
        <li
          onClick={() => {
            setIndex(0);
            setMenuVisible(false);
          }}
          className="hover:scale-110 cursor-pointer flex items-center space-x-2"
        >
          <img src={addLogo} alt="Add item" className="h-6 w-6" />
          <p className="font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Add item
          </p>
        </li>

        {/* Menu */}
        <li
          onClick={() => {
            setIndex(1);
            setMenuVisible(false);
          }}
          className="hover:scale-110 cursor-pointer flex items-center space-x-2"
        >
          <img src={menuLogo} alt="Menu" className="h-6 w-6" />
          <p className="font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Menu
          </p>
        </li>

        {/* Orders */}
        <li
          onClick={() => {
            setIndex(2);
            setMenuVisible(false);
          }}
          className="hover:scale-110 cursor-pointer flex items-center space-x-2"
        >
          <img src={orderLogo} alt="Orders" className="h-6 w-6" />
          <p className="font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Orders
          </p>
        </li>

        {/* Logout */}
        <li
          onClick={() => {
            setMenuVisible(false);
          }}
          className="hover:scale-110 cursor-pointer flex items-center space-x-2 absolute bottom-1"
        >
          <img src={logoutLogo} alt="Logout" className="h-6 w-6" />
          <p className="font-medium text-sm text-green-900 bg-gray-200 rounded-md px-2 py-1">
            Logout
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SidebarMobile;
