import React from "react";
import CategoryCard from "./CategoryCard";
import fruitSrc from "../../assets/fruits.png";
import vegSrc from "../../assets/veg.png";
import chipSrc from "../../assets/chips.png";
import healthSrc from "../../assets/health.png";
import drinkSrc from "../../assets/drinks.png";

function ExploreCategory() {
  return (
    <div className="h-[90svh] w-full mx-auto flex flex-col justify-start items-center">
      <h1 className="font-Raleway font-bold text-xl md:text-3xl text-fourthColor">
        Explore by category
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 mt-10 gap-2 justify-center items-center h-[60svh]">
        <CategoryCard imgSrc={fruitSrc} text="Fruits" />
        <CategoryCard imgSrc={vegSrc} text="Vegitables" />
        <CategoryCard imgSrc={chipSrc} text="Munchies" />
        <CategoryCard imgSrc={healthSrc} text="Health & Supplements" />
        <CategoryCard imgSrc={drinkSrc} text="Cold Drinks & Juice" />
      </div>
    </div>
  );
}

export default ExploreCategory;
