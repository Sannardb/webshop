import { useState } from "react";
import "../styles/SearchBar.css";
import products from "../products.json";
import ProductList from "./ProductList";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchOutput, setSearchOutput] = useState("");

  const filteredSearchResults = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchOutput.toLowerCase()) ||
      product.description.toLowerCase().includes(searchOutput.toLowerCase())
    );
  });

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSearchOutput(searchInput);
  };

  return (
    <div className="searchBarContainer">
      <form className="searchBar" onSubmit={handleClick}>
        <label htmlFor="form1" className="form-label"></label>
        <input
          type="text"
          placeholder="Search for products"
          className="form-control"
          id="form1"
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi-search"></i>
        </button>
      </form>
      <ProductList
        filteredSearchResults={filteredSearchResults}
        product={products}
      />
    </div>
  );
}

export default SearchBar;
