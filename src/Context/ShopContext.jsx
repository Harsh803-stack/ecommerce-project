import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";


export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    
    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < all_product.length; index++) {
            cart[index] = 0;
        }
        return cart;
    };
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ 
            ...prev, 
            [itemId]: Math.max(prev[itemId] - 1, 0) 
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        console.log(cartItems); 
    }, [cartItems]);

    const contextValue = { 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
