import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import OrderPlaced from "./OrderPlaced";

function OrderSummary() {
  const { foods, cartItems, getTotalAmount, token, url, clearCart } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  let amount = getTotalAmount();

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    foods.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address,
      items: orderItems,
      amount: amount,
    };
    try {
      if (orderItems.length <= 0) {
        alert("Your cart is empty");
        return;
      }
      const response = await fetch(`${url}/api/order/place`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        clearCart(); // Clear the cart
        setOrderPlaced(true); // Set the order placed state to true

        setTimeout(() => {
          navigate("/"); // Navigate to home page
          setOrderPlaced(false); // Reset order placed state after navigation
        }, 2000); // Delay of 3000 milliseconds (3 seconds)
      } else {
        // setMessage("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      // setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={placeOrder}
      className="flex flex-col w-full justify-between gap-5 lg:h-[80%]"
    >
      {orderPlaced ? <OrderPlaced /> : null}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center ">
          <p className="font-medium font-Quicksand text-fourthColor">Items</p>
          <p className="font-medium font-Quicksand text-fourthColor">
            ₹{amount}
          </p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <p className="font-bold font-Quicksand text-fourthColor">Address</p>
          <textarea
            required
            name=""
            id=""
            rows="5"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            className="bg-transparent outline-none border border-fourthColor rounded-md p-2 text-fourthColor"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="border border-fourthColor/20 my-3"></div>
        <button className="bg-fourthColor p-2 rounded-md">
          <p className="font-bold font-Quicksand text-secondary">Place Order</p>
        </button>
      </div>
    </form>
  );
}

export default OrderSummary;
