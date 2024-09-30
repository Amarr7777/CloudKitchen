import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import OrderSummary from "../components/Cart/OrderSummary";
import { StoreContext } from "../context/StoreContext";

function Cart({ url }) {
  const navigate = useNavigate();
  const { cartItems, foods } = useContext(StoreContext);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    }
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [navigate]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Required for modern browsers to show the dialog
    };

    // Add event listener to block reload/navigation
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    
    <div
      className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8"
      style={{ height: `${viewportHeight}px` }}
    >
      {/* Shopping Cart */}
      <div className="lg:col-span-2 lg:h-full p-5">
        <div className="flex justify-between items-start">
          <h1 className="font-Quicksand font-bold md:text-3xl text-fourthColor">
            Shopping Cart
          </h1>
          <h1 className="font-Quicksand font-bold md:text-3xl text-fourthColor">
            {Object.keys(cartItems).length} items
          </h1>
        </div>
        <div className="border border-fourthColor/20 my-3"></div>
        <div
          className="flex flex-col gap-2 overflow-hidden overflow-y-auto"
          style={{ maxHeight: `${viewportHeight * 0.9}px` }}
        >
          {Object.keys(cartItems).map((itemId, index) => {
            const foodItem = foods.find((food) => food._id === itemId);
            const quantity = cartItems[itemId]; 
            if (foodItem && quantity > 0) {
              return (
                <CartCard
                  key={index}
                  item={foodItem}
                  quantity={quantity}
                  url={url}
                />
              );
            }
            return null; // If quantity is 0 or the item doesn't exist, return null
          })}
        </div>
      </div>
      {/* Order Summary */}
      <div className="lg:h-full bg-fourthColor p-5">
        <h1 className="font-Quicksand font-bold md:text-3xl text-primary">
          Order Summary
        </h1>
        <div className="border border-primary/20 my-3"></div>
        <OrderSummary />
      </div>
    </div>
  );
}

export default Cart;
