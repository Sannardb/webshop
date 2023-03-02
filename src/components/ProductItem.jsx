import "../styles/ProductItem.css";

function ProductItem(props) {
  const { name, productNumber, price, image } = props.product;

  return (
    <div className="parentContainer">
      <div className="productItem">
        <div className="productName">{name}</div>
        <div className="productNumber">Product number: {productNumber}</div>
        <div className="productPrice">{price} SEK</div>
        <div className="productInfo"></div>
        <img src={image} alt={name} />
        <button className="addToCartBtn">Buy</button>
      </div>
    </div>
  );
}

export default ProductItem;
