import React from "react";

function OrderList({ orderItem, handleDetailsVisibility }) {
  console.log(orderItem);

  // Check if `orderItem` is valid
  if (!orderItem || Object.keys(orderItem).length === 0) {
    return <p>No order found</p>;
  }

  // Don't show the order if status is "Completed" or "Cancelled"
  if (orderItem.status === "Completed" || orderItem.status === "Cancelled") {
    return null; // Return null to not render anything
  }

  return (
    <button
      key={orderItem._id} // Use unique key here
      onClick={handleDetailsVisibility}
      className="flex flex-wrap flex-col w-full items-start gap-2 p-2 md:p-5 shadow-lg rounded mt-2 hover:shadow-md hover:shadow-green-900"
    >
      <div className="flex flex-row items-center justify-between w-full">
        <h6 className="text-green-900">{orderItem.status}</h6>
      </div>
      <p className="text-sm font-light">
        {orderItem.items.length} items for ₹{orderItem.amount}
      </p>
    </button>
  );
}

export default OrderList;