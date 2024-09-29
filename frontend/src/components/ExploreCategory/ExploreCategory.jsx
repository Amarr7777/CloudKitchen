import React from "react";
import CategoryCard from "./CategoryCard";
import fruitSrc from "../../assets/fruits.png";
import vegSrc from "../../assets/veg.png";
import chipSrc from "../../assets/chips.png";
import healthSrc from "../../assets/health.png";
import drinkSrc from "../../assets/drinks.png";

function ExploreCategory({ setCategorySelected }) {
  return (
    <div className="h-[90svh] w-full mx-auto flex flex-col justify-start items-center">
      <h1 className="font-Raleway font-bold text-xl md:text-3xl text-fourthColor">
        Explore by category
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 mt-10 gap-2 justify-center items-center h-[60svh]">
        <CategoryCard
          imgSrc={fruitSrc}
          text="Fruits"
          value="fruits"
          setCategorySelected={setCategorySelected}
        />
        <CategoryCard
          imgSrc={vegSrc}
          text="Vegitables"
          value="vegitable"
          setCategorySelected={setCategorySelected}
        />
        <CategoryCard
          imgSrc={chipSrc}
          text="Munchies"
          value="munchies"
          setCategorySelected={setCategorySelected}
        />
        <CategoryCard
          imgSrc={healthSrc}
          text="Health & Supplements"
          value="health"
          setCategorySelected={setCategorySelected}
        />
        <CategoryCard
          imgSrc={drinkSrc}
          text="Cold Drinks & Juice"
          value="drinks"
          setCategorySelected={setCategorySelected}
        />
      </div>
    </div>
  );
}

export default ExploreCategory;
