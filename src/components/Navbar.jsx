import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

function Navbar() {
  const { selectedProducts } = useContext(CartContext);

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <span>Outdoorsy</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/shoppingCart">
          <i className="bi-cart2"></i> {selectedProducts.length}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
