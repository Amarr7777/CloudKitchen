import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const url = "http://localhost:4000";

    useEffect(() => {
        if (localStorage.getItem("authToken")) {
            setToken(localStorage.getItem("authToken"));
        }
    }, []);

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

    const clearCart = () => {
        setCartItems({});
    };

    const contextValue = {
        cartItems,
        setCartItems,
        addToCart,
        removeItem,
        clearCart,
        token,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;