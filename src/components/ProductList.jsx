import ProductItem from "./ProductItem";
import "../styles/ProductList.css";
import { useState } from "react";

function ProductList(props) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const cartItem = {
      id: item.productNumber,
      name: item.name,
      price: item.price,
      image: item.image,
    };
    setCartItems([...cartItems, cartItem]);
  };

  return (
    <div className="ProductList">
      {props.filteredSearchResults.length > 0 ? (
        <div className="products">
          {props.filteredSearchResults.map((product, index) => (
            <ProductItem
              product={product}
              key={index}
              addToCart={addToCart}
              cartItems={cartItems}
            ></ProductItem>
          ))}
        </div>
      ) : (
        <span className="noResultsFound">No results found</span>
      )}
    </div>
  );
}

export default ProductList;
