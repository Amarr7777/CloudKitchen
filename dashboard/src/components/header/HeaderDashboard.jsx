import React from "react";
import logo from "../../assets/logo.svg";

function HeaderDashboard() {
  return (
    <div className="w-full py-2 px-5 flex justify-between bg-white">
      <div className="text-3xl font-bold">
        <div className="bg-gradient-to-r from-green-700 to-green-900 text-transparent bg-clip-text">
          <p className="">CLOUD KITCHEN</p>
        </div>
        {/* <img src={logo} alt="logo" className="w-[50px] h-[50px]" /> */}
      </div>
      <button className="px-5 rounded-md bg-green-900">
        <p className="text-sm font-light text-white">Log Out</p>
      </button>
    </div>
  );
}

export default HeaderDashboard;
