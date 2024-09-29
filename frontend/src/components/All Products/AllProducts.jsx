import React, { useContext, useState } from "react";
import ItemCard from "./ItemCard";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function AllProducts({
  foods,
  url,
  logoutTriggered,
  categorySelected,
  setCategorySelected,
}) {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");
  

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the foods array based on selected category and search query
  const filteredFoods = foods.filter((food) => {
    const matchesCategory = categorySelected
      ? food.category === categorySelected // Match category if selected
      : true; // If no category selected, include all items
    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch; // Both conditions must be true
  });

  return (
    <div className="h-[90svh] w-full mx-auto flex flex-col justify-start items-center">
      <h1 className="font-Raleway font-bold text-xl md:text-3xl text-fourthColor mb-5">
        All Products
      </h1>

      {/* Display filtered products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 justify-center items-center h-[60svh] relative w-4/5 lg:w-[90%]">
        {/* category */}
        {categorySelected.length > 0 ? (
          <div className="absolute -top-12 left-0 flex items-center border border-fourthColor rounded-md justify-end mx-auto">
            <div className="flex items-center justify-center gap-2 p-2 bg-fourthColor">
              <p className="font-medium font-Quicksand text-primary">
                {categorySelected}
              </p>
              <button
                onClick={() => {
                  setCategorySelected("");
                }}
              >
                <CloseRoundedIcon />
              </button>
            </div>
          </div>
        ) : null}
        {/* Search input */}
        <div className="absolute -top-12 right-0 flex items-center border border-fourthColor rounded-md justify-end mx-auto">
          <SearchRoundedIcon className="text-fourthColor pl-1" />
          <input
            type="text"
            placeholder="Search"
            className="p-1 md:py-2 md:px-2 bg-transparent outline-none text-fourthColor font-medium font-Quicksand"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <ItemCard
              key={index}
              food={food}
              url={url}
              logoutTriggered={logoutTriggered}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full col-span-4">
            <h1 className="font-medium font-Quicksand text-fourthColor">
              No products found.
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
