import { createContext, useState } from "react";
import products from "./products.json";

export const CartContext = createContext(null);

// function that returns an object with all product numbers as keys and set 0 as value
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

// component that provides the cart context to its children
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // function to add an item to the cart, and keep all existing items in the cart
  const addToCart = (productNumber) => {
    setCartItems((prev) => ({
      ...prev,
      [productNumber]: prev[productNumber] + 1,
    }));
  };

  // function to remove an item in the cart, keep all existing items in the cart
  const removeFromCart = (productNumber) => {
    setCartItems((prev) => ({
      ...prev,
      [productNumber]: prev[productNumber] - 1,
    }));
  };

  // update the quantity of an item in the cart
  const updateCartItemQuantity = (newAmount, productNumber) => {
    setCartItems((prev) => ({ ...prev, [productNumber]: newAmount }));
  };

  // object with the current state values to be used in other components
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
