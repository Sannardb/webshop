import { useContext, useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import products from "../products.json";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0); // set price initial state to 0

  useEffect(() => {
    const newTotalPrice = products.reduce((accumulator, currentValue) => {
      if (cartItems[currentValue.productNumber] > 0) {
        return (
          accumulator +
          currentValue.price * cartItems[currentValue.productNumber]
        );
      } else {
        return accumulator;
      }
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className="shoppingCart">
      <div className="cartName">
        <h1>Shopping cart</h1>
      </div>
      <div className="cartItems">
        {products.map((product, index) => {
          return (
            cartItems[product.productNumber] > 0 && (
              <CartItem product={product} key={index} />
            )
          );
        })}
      </div>
      {totalPrice > 0 ? (
        <div className="totalPrice">Total price: {totalPrice} SEK </div>
      ) : (
        <div className="emptyCart">Your cart is empty</div>
      )}
      <div className="continueShop">
        <Link to="/">Continue Shopping</Link>
      </div>
    </div>
  );
}

export default ShoppingCart;
