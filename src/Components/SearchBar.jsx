import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/Search-icon.png";
import "./SearchBar.css";

const SearchBar = ({ placeholder = "Explore Courses", initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <img className="Search-icon" src={SearchIcon} alt="Search-icon" />
    </div>
  );
};

export default SearchBar;
