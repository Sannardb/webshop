import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="homeLink">
        <Link to="/">
          <span>Outdoorsy</span>
        </Link>
      </div>
      <div className="cartLink">
        <Link to="/shoppingCart">
          <i className="bi-cart2"></i> {cartItems.length}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
