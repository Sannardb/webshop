import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBarContainer">
      <form className="searchBar">
        <label htmlFor="form1" className="form-label"></label>
        <input
          type="text"
          placeholder="Search for products"
          className="form-control"
          id="form1"
        />
        <button type="submit" className="btn btn-primary">
          <i className="bi-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
