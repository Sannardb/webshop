import { CartProvider } from "./CartContext";
import Search from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="search">
            <Search />
          </div>
          <div className="cart">
            <ShoppingCart />
          </div>
        </div>
        {/* <Route path="/modal/:productNumber" element={<Modal />} /> */}
      </div>
    </CartProvider>
  );
}

export default App;
