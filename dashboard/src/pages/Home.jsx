import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderDashboard from "../components/header/HeaderDashboard";
import AdditemHome from "../components/AddItem/AdditemHome";
import ListItemHome from "../components/ListItem/ListItemHome";
import OrderListHome from "../components/OrderList/OrderListHome";

function Home() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [index, setIndex] = useState(0);

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
    <div className="md:grid fixed w-full">
      <div className="hidden md:block bg-white">
        <HeaderDashboard />
      </div>
      <div className="flex flex-1 md:grid md:grid-cols-[70px,1fr] h-auto w-full">
        <div className="absolute top-1 left-1 md:hidden">
          <MenuIcon className="text-black" />
        </div>
        <div>
          <SideBar viewportHeight={viewportHeight} setIndex={setIndex} />
        </div>
        <div className="bg-gray-100 ">
          {index === 0 ? (
            <AdditemHome viewportHeight={viewportHeight} />
          ) : index === 1 ? (
            <ListItemHome viewportHeight={viewportHeight} />
          ) : (
            <OrderListHome viewportHeight={viewportHeight} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
