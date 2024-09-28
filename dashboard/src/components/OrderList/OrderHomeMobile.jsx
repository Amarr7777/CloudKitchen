import React, { useState } from "react";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";

function OrderHomeMobile({ viewportHeight, viewportWidth }) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  const handleDetailsVisibility = () => {
    setDetailsVisible(!detailsVisible); // Toggle visibility
  };

  return (
    <div
      style={{ height: `${viewportHeight}px`, width: `${viewportWidth}px` }}
      className="flex flex-col bg-gray-100 items-center md:hidden"
    >
      <div className="p-2 mx-2 shadow-md rounded-md mt-10 bg-white w-4/5">
        {detailsVisible ? (
          <>
            <OrderDetails handleDetailsVisibility={handleDetailsVisibility}/>
          </>
        ) : (
          <OrderList handleDetailsVisibility={handleDetailsVisibility} />
        )}
      </div>
    </div>
  );
}

export default OrderHomeMobile;