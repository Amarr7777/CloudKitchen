import React from "react";

function OrderItems({ item }) {
  return (
    <div className="bg-slate-200">
      <div className="flex flex-row items-center p-2">
        {/* <FaCoffee className="text-green-950" /> */}
        <span className="pl-2 font-bold text-lg text-green-950">
          {item.items.length}X
        </span>
        <span className="font-semibold text-lg text-green-950">
          {/* {item.items[0].name} */}
        </span>
      </div>
    </div>
  );
}

export default OrderItems;
