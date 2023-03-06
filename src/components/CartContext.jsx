import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const removeFromCart = (product) => {
    setSelectedProducts(selectedProducts.filter((p) => p !== product));
  };

  const clearCart = () => {
    setSelectedProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        selectedProducts,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
