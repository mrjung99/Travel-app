import React from "react";

const SearchCountry = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectionChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />
      <select value={filter} onChange={handleSelectionChange}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchCountry;
