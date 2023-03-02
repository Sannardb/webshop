import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

function ProductList(props) {
  return (
    <div className="ProductList">
      {props.filteredSearchResults.length > 0 ? (
        <div className="products">
          {props.filteredSearchResults.map((product, index) => (
            <ProductItem product={product} key={index}></ProductItem>
          ))}
        </div>
      ) : (
        <span className="noResultsFound">No results found</span>
      )}
    </div>
  );
}

export default ProductList;
