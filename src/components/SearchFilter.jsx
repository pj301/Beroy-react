import React, { useState } from "react";
import "../assets/filter.css";

const SearchFilter = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search tasks..."
      />
    </div>
  );
};

export default SearchFilter;
/* beroy */