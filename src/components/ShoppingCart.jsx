function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
      <i className="bi-cart"></i>
      {props.cartItems.length > 0 && (
        <span className="cartCount">{props.cartItems.length}</span>
      )}
      <div className="cartItems">
        {props.cartItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
