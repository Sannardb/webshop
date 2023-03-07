import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Search from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/" element={<Search />} />
          <Route path="/modal/:productNumber" element={<Modal />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
