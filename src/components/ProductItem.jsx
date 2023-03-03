import "../styles/ProductItem.css";
import ShoppingCart from "./ShoppingCart";

function ProductItem(props) {
  const { name, productNumber, price, image, description } = props.product;

  return (
    <div className="parentContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productNumber">Product number: {productNumber}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo">
          {/* <Link to={"/moreInfo"}>More Info</Link> */}
        </div>
        <img src={image} alt={name} />
        <button
          className="addToCartBtn"
          onClick={() => {
            props.addToCart(props.product);
          }}
        >
          Buy
        </button>
        <ShoppingCart productItem={props.product} cartItems={props.cartItems} />
      </div>
    </div>
  );
}

export default ProductItem;
