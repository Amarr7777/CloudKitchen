import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
  return (
    <div className="flex flex-1 md:grid md:grid-cols-[100px,1fr]  h-svh w-full">
      <div className="absolute top-1 left-1 md:hidden">
        <MenuIcon />
      </div>
      <div className="bg-red-200"></div>
      <div className="bg-red-500"> </div>
    </div>
  );
}

export default Dashboard;
