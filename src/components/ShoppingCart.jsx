import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import products from "../products.json";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="shoppingCart">
      <div>
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
      <div>
        <button>
          <Link to="/">Continue Shopping</Link>
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
