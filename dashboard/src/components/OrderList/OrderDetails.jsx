import React, { useContext, useState } from "react";
import OrderItem from "./OrderItem";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { StoreContext } from "../../context/StoreContext";

function OrderDetails({ order, handleDetailsVisibility }) {
  const { updateOrderStatus } = useContext(StoreContext);
  // const[status,setStatus] = useState("")

  return (
    <div className="flex flex-col h-full">
      <div className="">
        <button onClick={handleDetailsVisibility} className="py-2 lg:hidden">
          <KeyboardBackspaceIcon className="text-gray-500" />
        </button>
      </div>
      <div className="md:flex items-center justify-between p-5 bg-gray-300">
        <p className="text-green-900">{order._id}</p>
        <p className="text-gray-500 font-light">{order.date}</p>
        <p className="text-gray-500 font-light">
          {order.items.length} items for ₹{order.amount}
        </p>
      </div>
      <div className="flex flex-col gap-y-5 mt-5 ">
        {order.items.map((item, key) => (
          <OrderItem key={key} item={item} />
        ))}
      </div>
      <div className="flex justify-evenly items-center p-5">
        {order.status === "Food Processing" ? (
          <div className="flex gap-2">
            <button
              onClick={() => {
                updateOrderStatus(order._id, "Cancelled");
              }}
              className="py-2 px-5 lg:px-28 rounded-lg bg-white border border-green-900 text-green-900"
            >
              Reject Order
            </button>
            <button
              onClick={() => {
                updateOrderStatus(order._id, "Preparing");
              }}
              className="py-2 px-5 lg:px-28 rounded-lg bg-green-900 text-white"
            >
              Confirm Order
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => {
                updateOrderStatus(order._id, "Delivering");
              }}
              className="py-2 px-5 lg:px-28 rounded-lg bg-white border border-green-900 text-green-900"
            >
              Order Ready
            </button>
            <button
              onClick={() => {
                updateOrderStatus(order._id, "Completed");
              }}
              className="py-2 px-5 lg:px-28 rounded-lg bg-green-900 text-white"
            >
              Order Delivered
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
