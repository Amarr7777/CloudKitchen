import React, { useContext, useEffect, useState } from "react";
import OrderItems from "./OrderItems";
import { StoreContext } from "../../context/StoreContext";

function OrderCard() {
  const { url, token, orderData } = useContext(StoreContext);
  //   const [data, setData] = useState([]);

  //   const fetchOrders = async () => {
  //     const token = localStorage.getItem("authToken");
  //     const response = await fetch(`${url}/api/order/getUserOrders`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await response.json();
  //     setData(data.data);
  //     console.log(data);
  //   };
  //   useEffect(() => {
  //     fetchOrders();
  //   }, []);
  return (
    <div className="container mx-auto p-4 font-Quicksand">
      <h1 className="text-2xl font-bold mb-4 text-fourthColor">
        Previous Orders
      </h1>
      {orderData &&
        orderData.map((order) => (
          <div
            key={order._id}
            className="bg-secondary shadow-md rounded-lg p-4 mb-4"
          >
            <h2 className="text-sm font-semibold">Order ID: {order._id}</h2>
            <p className="text-sm text-gray-600">Address: {order.address}</p>
            <p className="text-lg text-fourthColor font-bold">
              Status: {order.status}
            </p>
            <p className="text-sm text-gray-600">
              Date: {new Date(order.date).toLocaleString()}
            </p>
            <p className="text-lg font-bold text-primary">
              Total Amount: ₹{order.amount}
            </p>

            {order.items.length > 0 ? (
              <div className="mt-2">
                <h3 className="text-md font-semibold">Items:</h3>
                <ul className="list-disc list-inside bg-thirdColor/20 rounded-md p-2">
                  {order.items.map((item) => (
                    <li
                      key={item._id}
                      className="flex justify-between items-center p-1"
                    >
                      <span className="font-medium">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-gray-600">₹{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No items in this order.</p>
            )}
          </div>
        ))}
    </div>
  );
}

export default OrderCard;
