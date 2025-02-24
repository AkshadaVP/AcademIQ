import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/Card";
import coursesData from "../data/courses.json";
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    // Filter courses based on title or category
    const results = coursesData.filter((course) => {
      const titleMatch = course.title.toLowerCase().includes(query);
      const categoryMatch =
        course.category && course.category.toLowerCase().includes(query);
      return titleMatch || categoryMatch;
    });
    setFilteredCourses(results);
  }, [query]);

  return (
    <div className="search-results-page">
      <Navbar />
      <div className="search-results-container">
        {/* The search bar appears under the Navbar */}
        <SearchBar initialQuery={query} />
        <h2 className="results-heading">Search Results for "{query}"</h2>
        <div className="results-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="result-card">
                <Card course={course} />
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
