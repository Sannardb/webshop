import { useContext } from "react";
import "../styles/ProductItem.css";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function ProductItem(props) {
  const { addToCart, cartItems } = useContext(CartContext);
  const { name, productNumber, price, image } = props.product;

  const cartItemAmount = cartItems[productNumber];

  return (
    <div className="parentContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productNumber">Product number: {productNumber}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo">
          <Link to={`/modal/${productNumber}`}>More information</Link>
        </div>
        <img src={image} alt={name} />
        <button
          className="addToCartBtn"
          onClick={() => {
            addToCart(productNumber);
          }}
        >
          Add to Cart
        </button>
        {cartItemAmount > 0 && <> items in cart: ({cartItemAmount})</>}
      </div>
      <div className="info"></div>
    </div>
  );
}

export default ProductItem;
