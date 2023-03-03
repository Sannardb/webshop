import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const cart = () => {
    console.log("im in the cart");
  };

  return (
    // <nav className="navbar">
    //   <div className="headerName">Outdoorsy</div>
    //   <div className="hej">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <a className="nav-link" href="#" onClick={cart}>
    //           <span className="badge badge-pill bg-danger">no items</span>
    //           <span>
    //             <i className="bi-cart2"></i>
    //           </span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    // <NavLink to="/ShoppingCart"></NavLink>
    <div></div>
  );
}

export default Navbar;
