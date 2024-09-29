import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import imgSrc from "../assets/watermelon.png";
import ExploreCategory from "../components/ExploreCategory/ExploreCategory";
import AllProducts from "../components/All Products/AllProducts";

function Home() {
  const url = "http://localhost:4000"

  const [foods, setFoods] = useState([]);

  const getFoodData = async () => {
    try {
      const response = await fetch(`${url}/api/food/listfoods`, {
        method: "GET",
      });
      const result = await response.json();

      if (result.success) {
        setFoods(result.data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getFoodData();
  }, []);
  return (
    <>
      <div className="bg-mainBg bg-contain bg-no-repeat bg-opacity-10 h-svh relative">
        <Header />
        <img
          src={imgSrc}
          alt="watermelon"
          width={1000}
          height={1000}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-12"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-7xl leading-relaxed text-pretty text-center md:text-6xl lg:text-8xl md:text-nowrap text-fourthColor">
          WELCOME TO OUR STORE
        </p>
      </div>
      <ExploreCategory />
      <AllProducts foods={foods} url={url}/>
    </>
  );
}

export default Home;
