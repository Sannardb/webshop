import { useContext } from "react";
import "../styles/ProductItem.css";
import { CartContext } from "./CartContext";

function ProductItem(props) {
  const { addToCart } = useContext(CartContext);
  const { name, productNumber, price, image, description } = props.product;

  return (
    <div className="parentContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productNumber">Product number: {productNumber}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo"></div>
        <img src={image} alt={name} />
        <button
          className="addToCartBtn"
          onClick={() => {
            addToCart(props.product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
