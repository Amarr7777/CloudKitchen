import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderDashboard from "../components/header/HeaderDashboard";
import AdditemHome from "../components/AddItem/AdditemHome";
import ListItemHome from "../components/ListItem/ListItemHome";
import OrderListHome from "../components/OrderList/OrderListHome";
import SidebarMobile from "../components/sidebar/SidebarMobile";
import CloseIcon from "@mui/icons-material/Close";
import OrderHomeMobile from "../components/OrderList/OrderHomeMobile";

function Home() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [index, setIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleResize = () => {
    setViewportHeight(window.innerHeight);
    setViewportWidth(window.innerWidth)
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:grid md:fixed w-full">
      <div className="hidden md:block bg-white">
        <HeaderDashboard />
      </div>
      <div className="flex flex-1 md:grid md:grid-cols-[70px,1fr] h-auto w-full">
        <div
          className="absolute top-1 left-1 md:hidden cursor-pointer z-20"
          onClick={() => {
            setMenuVisible(!menuVisible);
          }}
        >
          {menuVisible ? (
            <CloseIcon className="text-black" />
          ) : (
            <MenuIcon className="text-black" />
          )}
        </div>
        {menuVisible ? (
          <SidebarMobile
            viewportHeight={viewportHeight}
            setIndex={setIndex}
            setMenuVisible={setMenuVisible}
          />
        ) : null}
        <div>
          <SideBar viewportHeight={viewportHeight} setIndex={setIndex} />
        </div>
        <div className="bg-gray-100 ">
          {index === 0 ? (
            <AdditemHome viewportHeight={viewportHeight} viewportWidth={viewportWidth} />
          ) : index === 1 ? (
            <ListItemHome viewportHeight={viewportHeight} viewportWidth={viewportWidth} />
          ) : (
            <>
              <OrderListHome viewportHeight={viewportHeight} viewportWidth={viewportWidth} />
              <OrderHomeMobile viewportHeight={viewportHeight} viewportWidth={viewportWidth} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
