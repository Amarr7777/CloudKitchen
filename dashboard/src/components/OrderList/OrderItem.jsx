import React from "react";

function OrderItem({ item }) {
  return (
    <div className="flex items-center justify-between p-5 border border-gray-200">
      <div className="flex flex-col">
        <p className="text-green-900">{item.name}</p>
        <p className="text-gray-500 font-light">{item.category}</p>
      </div>
      <div>
        <p className="text-black font-semibold">₹{item.price}</p>
      </div>
    </div>
  );
}

export default OrderItem;