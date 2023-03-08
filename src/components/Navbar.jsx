import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="homeLink">
        <Link to="/">
          <span>Outdoorsy</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
