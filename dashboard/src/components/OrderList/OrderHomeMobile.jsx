import React, { useContext, useState } from "react";
import OrderDetails from "./OrderDetails";
import OrderList from "./OrderList";
import { StoreContext } from "../../context/StoreContext";

function OrderHomeMobile({ viewportHeight, viewportWidth }) {
  const { orderData } = useContext(StoreContext);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDetailsVisibility = (order) => {
    setSelectedOrder(order);
    setDetailsVisible(true);
  };

  const handleBackToList = () => {
    setDetailsVisible(false);
    setSelectedOrder(null);
  };

  return (
    <div
      style={{ minHeight: `${viewportHeight}px`, width: `${viewportWidth}px` }}
      className="flex flex-col flex-wrap items-center lg:hidden"
    >
      <div className="p-2 mx-2 shadow-md rounded-md mt-10 bg-white w-4/5">
        {detailsVisible && selectedOrder ? (
          <OrderDetails
            order={selectedOrder}
            handleDetailsVisibility={handleBackToList}
          />
        ) : (
          <>
            {orderData.length > 0 ? (
              orderData.map((order, index) => (
                <OrderList
                  key={order._id} // Ensure each item has a unique key
                  orderItem={order}
                  handleDetailsVisibility={() => handleDetailsVisibility(order)}
                />
              ))
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <h4 className="font-semi text-gray-400 text-lg">
                  No Orders Available
                </h4>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OrderHomeMobile;
