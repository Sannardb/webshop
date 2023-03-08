import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../styles/ProductItem.css";

function ProductItem(props) {
  const { addToCart } = useContext(CartContext);
  const { name, productNumber, price, image, description } = props.product;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="parentProductContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo">
          <button className="infoBtn" onClick={() => setShowInfo(!showInfo)}>
            {/* when btn is clicked, showInfo is updated to the opposite value */}
            More information
          </button>
          <div className="info">
            {/* if showInfo is true, render div */}
            {showInfo && (
              <div>
                Product number: {productNumber}
                <br />
                Description: {description}
              </div>
            )}
          </div>
        </div>
        <img src={image} alt={name} />
        {/*  */}
        <button
          className="addToCartBtn"
          onClick={() => {
            addToCart(productNumber);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
