import { useContext } from "react";
import "../styles/CartItem.css";
import { CartContext } from "./CartContext";

function CartItem(props) {
  const { name, productNumber, price, image } = props.product;
  const { cartItems, addToCart, removeFromCart, updateCartItemQuantity } =
    useContext(CartContext);

  return (
    <div className="parentContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productNumber">Product number: {productNumber}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo"></div>
        <img src={image} alt={name} />
      </div>

      <div className="quantity">
        <button
          className="removeQuantity"
          onClick={() => removeFromCart(productNumber)}
        >
          -
        </button>
        <input
          value={cartItems[productNumber]}
          onChange={(e) =>
            updateCartItemQuantity(Number(e.target.value), productNumber)
          }
        />
        <button
          className="addQuantity"
          onClick={() => addToCart(productNumber)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
