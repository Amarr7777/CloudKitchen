import React from "react";
import logo from "../../assets/logo.svg";

function HeaderDashboard() {
  return (
    <div className="w-full py-2 px-5 flex justify-between border-b border-primary">
      <div className="text-3xl font-bold">
        <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
      </div>
      <button className="px-5 rounded-md bg-primary">
        <p className="text-sm font-light text-white">Log Out</p>
      </button>
    </div>
  );
}

export default HeaderDashboard;
