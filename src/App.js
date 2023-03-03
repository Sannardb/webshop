import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";
import products from "./products.json";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Navbar />
      <SearchBar />
      {/* <Routes> */}
      {/* <Route path="/ShoppingCart" element={<ShoppingCart />} /> */}
      {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
