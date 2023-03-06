import { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const { selectedProducts, removeFromCart } = useContext(CartContext);

  return (
    <div className="shoppingCart">
      {selectedProducts.map((product, index) => (
        <CartItem
          product={product}
          key={index}
          removeFromCart={removeFromCart}
        />
      ))}
      <div>
        <button>
          <Link to="/">Back to Search</Link>
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
