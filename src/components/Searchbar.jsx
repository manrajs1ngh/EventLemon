import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="searchbar__wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search by location..."
      />
      <button className="button" onClick={() => onSearch(inputValue)}>Search</button>
    </div>
  );
};

export default SearchBar;
