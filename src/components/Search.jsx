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

      {searchOutput && filteredSearchResults.length === 0 ? (
        <div className="noResultsFound">No results found.</div>
      ) : null}

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
