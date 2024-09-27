import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderDashboard from "../components/header/HeaderDashboard";
import AddItem from "../components/AddItem/AddItem";
import ListItem from "../components/AddItem/ListItem";

function Home() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setViewportHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:grid grid-rows-[1fr] fixed w-full">
      <div className="hidden md:block">
        <HeaderDashboard />
      </div>
      <div className="flex flex-1 md:grid md:grid-cols-[150px,1fr] h-auto w-full">
        <div className="absolute top-1 left-1 md:hidden">
          <MenuIcon className="text-black" />
        </div>
        <div>
          <SideBar viewportHeight={viewportHeight} />
        </div>
        <div
          className="flex justify-center items-center"
          style={{ height: `${viewportHeight}px` }}
        >
          {/* <AddItem /> */}
          <ListItem/>
        </div>
      </div>
    </div>
  );
}

export default Home;
