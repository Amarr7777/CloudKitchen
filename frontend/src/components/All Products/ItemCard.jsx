import React, { useState, useEffect } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function ItemCard({ food, url, logoutTriggered }) {
  const [quantity, setQuantity] = useState(0);

  console.log("ITEM CARD",logoutTriggered)
  

  // Fetch cart data and update the quantity for the current food item
  const getCart = async () => {
    try {
      const token = localStorage.getItem("authToken");
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
        // Find the item in the cart that matches the current food item's id
        const cartItem = data.data[food._id];
        if (cartItem) {
          console.log(cartItem);
          setQuantity(cartItem); 
        }
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
    const token = localStorage.getItem("authToken");
    if (token) {
      getCart(); // Fetch cart data when the component mounts
    }
  }, [logoutTriggered]);

  // Handle adding item to cart
  const handleAdd = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      alert("You need to log in to add items to the cart.");
      return ;
    }
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      addToCart(newQuantity,token);
      return newQuantity;
    });
  };

  // Handle removing item from cart
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        removeFromCart(newQuantity);
        return newQuantity;
      });
    }
  };

  // Add to cart function
  const addToCart = async (quantity,token) => {
    if (quantity > 0) {
      try {
        // const token = localStorage.getItem("authToken");
        if (!token) {
          alert("You need to log in to add items to the cart.");
          return ;
        }
        const response = await fetch(`${url}/api/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            itemId: food._id,
          }),
        });

        const data = await response.json();
        if (!data.success) {
          alert("Failed to add to cart");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  // Remove from cart function
  const removeFromCart = async () => {
    if (quantity > 0) {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          alert("You need to log in to remove items from the cart.");
          return;
        }
        const response = await fetch(`${url}/api/cart/remove`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            itemId: food._id,
          }),
        });

        const data = await response.json();
        if (!data.success) {
          alert("Failed to remove from cart");
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

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
          onClick={handleRemove}
        >
          <RemoveRoundedIcon className="text-white" />
        </button>
        <div>{quantity}</div>
        <button
          className="rounded-full bg-green-400 hover:scale-105"
          onClick={handleAdd}
        >
          <AddRoundedIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
