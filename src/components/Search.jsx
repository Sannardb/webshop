import { useContext, useState } from "react";
import "../styles/Search.css";
import products from "../products.json";
import ProductItem from "./ProductItem";
import { CartContext } from "../CartContext";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchOutput, setSearchOutput] = useState("");
  const { addToCart } = useContext(CartContext);

  const filteredSearchResults = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchOutput.toLowerCase()) ||
      product.description.toLowerCase().includes(searchOutput.toLowerCase())
    );
  });

  // gives the elements value, the input field
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

      {/* if filteredSearchResults length is 0, render no results div */}
      {filteredSearchResults.length === 0 ? (
        <div className="noResultsFound">No results found.</div>
      ) : null}

      {/* if the searchOutput and filteredSearchResults length is bigger than 0, render product results */}
      {searchOutput && filteredSearchResults.length > 0 ? (
        <div className="products">
          {filteredSearchResults.map((product, index) => (
            <ProductItem product={product} key={index} addToCart={addToCart} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Search;
