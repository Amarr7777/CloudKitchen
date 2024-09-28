import React from "react";

function OrderList() {
  return (
    <div className="flex flex-wrap flex-col w-full items-start gap-2 p-5 shadow-lg rounded mt-2 hover:shadow-md hover:shadow-green-900">
      <div className="flex flex-row items-center justify-between w-full">
        <h6 className="text-gray-600">AMAR</h6>
        <h6 className="text-green-900">PLACED</h6>
      </div>
      <h6 className="text-green-900 font-semibold">
        {/* {hours}:{minutes >= 10 ? `${minutes}` : `0${minutes}`} */}
      </h6>
      <p className="text-sm font-light">
        2 items for ₹180
      </p>
    </div>
  );
}

export default OrderList;
