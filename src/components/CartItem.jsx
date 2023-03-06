import "../styles/CartItem.css";

function CartItem(props) {
  const { name, productNumber, price, image, description } = props.product;

  const removeFromCart = () => {
    props.removeFromCart(props.product);
  };

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
        <button className="removeQuantity"> - </button>
        <input />
        <button className="addQuantity"> + </button>
      </div>

      <button className="removeFromCartBtn" onClick={removeFromCart}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
