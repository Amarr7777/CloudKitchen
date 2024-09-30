import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foods, setFoods] = useState([]);
  const [token, setToken] = useState("");
  const [orderData, setOrderData] = useState([]);
  const url = "https://cloudkitchen-2itp.onrender.com";
  // const url = "http://localhost:4000";

  useEffect(() => {
    async function loadData() {
        await getFoodData()
        await fetchOrders()
      if (localStorage.getItem("authToken")) {
        setToken(localStorage.getItem("authToken"));
      }
    //   await loadCartData(localStorage.getItem("authToken"));
    }
    loadData();
  }, []);

  const getFoodData = async () => {
    try {
      const response = await fetch(`${url}/api/food/listfoods`, {
        method: "GET",
      });
      const result = await response.json();

      if (result.success) {
        setFoods(result.data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Increment count or initialize to 1
    }));
    if (token) {
      try {
        const response = await fetch(`${url}/api/cart/add`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            itemId: itemId,
          }),
        });
        const data = await response.json();
        if (!data.success) {
          alert("Failed to add to cart");
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  const removeItem = async (itemId) => {
    setCartItems((prev) => {
      const updatedItems = { ...prev };
      if (updatedItems[itemId] > 1) {
        updatedItems[itemId] -= 1;
      } else {
        delete updatedItems[itemId];
      }
      return updatedItems;
    });
    if (token) {
      try {
        const response = await fetch(`${url}/api/cart/remove`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            itemId: itemId,
          }),
        });
        const data = await response.json();
        if (!data.success) {
          alert("Failed to remove from cart");
        }
      } catch (error) {
        console.error("Error removing from cart:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

//   const loadCartData = async (token) => {
//     const response = await fetch(`${url}/api/cart/get`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setCartItems(response.data.data);
//   };

  const clearCart = () => {
    setCartItems({});
  };
  // fetch order
  const fetchOrders = async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(`${url}/api/order/getUserOrders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setOrderData(data.data);
    console.log(data);
  };

  // Function to calculate the total cart amount
  const getTotalAmount = () => {
    return Object.keys(cartItems).reduce((total, itemId) => {
      const foodItem = foods.find((food) => food._id === itemId);
      const itemQuantity = cartItems[itemId] || 0;
      const itemPrice = foodItem ? foodItem.price : 0;
      return total + itemQuantity * itemPrice;
    }, 0);
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeItem,
    clearCart,
    token,
    foods,
    setFoods,
    getTotalAmount,
    url,
    orderData
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
