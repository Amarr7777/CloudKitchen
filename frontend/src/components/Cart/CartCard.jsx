import React, { useContext, useEffect } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { StoreContext } from "../../context/StoreContext";

function CartCard({ item, quantity, url }) {
  const { addToCart, removeItem, setCartItems, token } =
    useContext(StoreContext);
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
    <div className="w-full flex flex-wrap justify-between items-center p-2 shadow bg-secondary rounded-lg">
      {/* Image */}
      <div className="w-1/3 flex flex-col justify-center items-start">
        <div className="flex flex-col justify-center items-center">
          <img
            src={`${url}/images/${item.image}`}
            alt={item.name}
            className="w-[150px] h-[70px] md:w-[100px] md:h-[100px] object-cover p-1 md:p-2 rounded-full"
          />
          <p className="text-center font-Quicksand text-fourthColor">
            {item.name}
          </p>
        </div>
      </div>
      {/* Quantity */}
      <div className="flex items-center justify-center gap-2 bg-primary w-fit rounded-full">
        <button
          className="rounded-full bg-red-800 hover:scale-105 p-2"
          onClick={() => {
            removeItem(item._id);
          }}
        >
          <RemoveRoundedIcon className="text-white" />
        </button>
        <div>{quantity}</div>
        <button
          className="rounded-full bg-green-800 hover:scale-105 p-2"
          onClick={() => {
            addToCart(item._id);
          }}
        >
          <AddRoundedIcon className="text-white" />
        </button>
      </div>
      {/* Price */}
      <div className="w-1/3 flex justify-end">
        <p className="font-medium font-Raleway text-fourthColor">
          ₹ {item.price * quantity}
        </p>
      </div>
    </div>
  );
}

export default CartCard;
