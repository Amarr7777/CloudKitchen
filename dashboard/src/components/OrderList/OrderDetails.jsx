import React from "react";
import OrderItem from "./OrderItem";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function OrderDetails({ handleDetailsVisibility }) {
  return (
    <div className="flex flex-col h-full">
      <div className="">
        <button onClick={handleDetailsVisibility} className="py-2 md:hidden">
          <KeyboardBackspaceIcon className="text-gray-500" />
        </button>
      </div>
      <div className="flex items-center justify-between p-5 bg-gray-300">
        <p className="text-green-900">42E612</p>
        <p className="text-gray-500 font-light">234567</p>
        <p className="text-gray-500 font-light">2 items for 256</p>
      </div>
      <div className="flex flex-col gap-y-5 mt-5 ">
        {/* {order.items.map((item, key) => ( */}
        <OrderItem />
        <OrderItem />
        {/* ))} */}
      </div>
      <div className="flex justify-evenly items-center p-5">
        {/* {order.status === "Placed" ? ( */}
        <div className="flex gap-2">
          <button
            // onClick={handleCancel}
            className="py-2 px-5 lg:px-28 rounded-lg bg-white border border-green-900 text-green-900"
          >
            Reject Order
          </button>
          <button
            // onClick={handleProcessing}
            className="py-2 px-5 lg:px-28 rounded-lg bg-green-900 text-white"
          >
            Confirm Order
          </button>
        </div>
        {/* ) : (
        <>
          <button
            // onClick={handleReady}
            className="py-2 px-5 lg:px-28 rounded-lg bg-white border border-green-900 text-green-900"
          >
            Order Ready
          </button>
          <button
            // onClick={handleDelivered}
            className="py-2 px-5 lg:px-28 rounded-lg bg-green-900 text-white"
          >
            Order Delivered
          </button>
        </>
        )} */}
      </div>
    </div>
  );
}

export default OrderDetails;
