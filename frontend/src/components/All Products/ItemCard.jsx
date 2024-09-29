import React, { useState, useEffect, useContext } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { StoreContext } from "../../context/StoreContext";

function ItemCard({ food, url, logoutTriggered }) {
  const { cartItems, addToCart, removeItem, token, setCartItems } =
    useContext(StoreContext);

  // Fetch cart data and update the quantity for the current food item
  const getCart = async () => {
    try {
      if (!token) {
        alert("You need to log in to view your cart.");
        return;
      }
      const response = await fetch(`${url}/api/cart/get`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        // Update the cart items in the StoreContext
        setCartItems(data.data);
        console.log("Cart data:", data);
      } else {
        alert("Failed to fetch cart data");
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      alert("An error occurred while fetching the cart.");
    }
  };

  useEffect(() => {
    if (token) {
      getCart(); // Fetch cart data when the component mounts
    }
  }, [token]);

  return (
    <div className="flex flex-col justify-start items-center h-[200px] w-[150px] md:h-[250px] md:w-[300px] bg-secondary shadow-md rounded-lg cursor-pointer transition relative p-2">
      {/* image */}
      <div>
        <img
          src={`${url}/images/${food.image}`}
          alt="image"
          className="w-[150px] h-[70px] md:w-[250px] md:h-[150px] object-cover p-1 md:p-2 rounded-md border-2 border-thirdColor"
        />
      </div>
      {/* details */}
      <div className="flex flex-col w-full items-start justify-start p-2">
        <div className="flex justify-between w-full">
          <p className="font-bold font-Quicksand text-thirdColor">
            ₹{food.price}{" "}
          </p>
          <p className="font-light font-Quicksand text-thirdColor">
            {food.quantity}{" "}
          </p>
        </div>
        <p className="font-medium font-Quicksand text-thirdColor">
          {food.name}{" "}
        </p>
      </div>
      {/* add to cart */}
      <div className="absolute bottom-0 right-0 p-2 flex items-center gap-2">
        <button
          className="rounded-full bg-red-400 hover:scale-105"
          onClick={() => {
            removeItem(food._id);
          }}
        >
          <RemoveRoundedIcon className="text-white" />
        </button>
        <div>{cartItems[food._id] || 0}</div>
        <button
          className="rounded-full bg-green-400 hover:scale-105"
          onClick={() => {
            addToCart(food._id);
          }}
        >
          <AddRoundedIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
