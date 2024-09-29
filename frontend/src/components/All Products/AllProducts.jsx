import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function AllProducts({ foods, url, logoutTriggered }) {
  return (
    <div className="h-[90svh] w-full mx-auto flex flex-col justify-start items-center">
      <h1 className="font-Raleway font-bold text-xl md:text-3xl text-fourthColor">
        All Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 justify-center items-center h-[60svh]">
        {foods.length > 0 ? (
          foods.map((food, index) => (
            <ItemCard
              key={index}
              food={food}
              url={url}
              logoutTriggered = {logoutTriggered}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
