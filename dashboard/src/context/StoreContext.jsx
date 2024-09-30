import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
    // const url = "http://localhost:4000";
    const url = "https://cloudkitchen-backend.onrender.com";
    const[orderData,setOrderData] = useState([])
    useEffect(()=>{
      fetchOrders();
    },[])
// fetch orders
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${url}/api/order/getAllOrders`,{
            method: "POST"
          }
        );
        const data = await response.json();
        console.log(data)
        if (data.success) {
          setOrderData(data.data);
        } else {
          console.error("Error fetching orders");
        }
      } catch (error) {
        console.error("Error:", error);
      } 
    };

  //  update order status
  const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const response = await fetch(`${url}/api/order/orderStatus`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: orderId,
        status: newStatus,
      }),
    });

    const data = await response.json();

    if (data.success) {
      console.log("Order status updated successfully:", data.message);
      fetchOrders()
    } else {
      console.error("Failed to update order status:", data.message);
    }
  } catch (error) {
    console.error("Error updating order status:", error);
  }
};
  const contextValue = {
    url,
    orderData,
    updateOrderStatus,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
