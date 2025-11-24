import React from "react";

const SearchCountry = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectionChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="w-full flex items-center gap-10  mb-8">
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={handleInputChange}
        className="bg-gray-100 w-5/12 py-2 px-3 border border-gray-400 outline-0 text-gray-800
        text-[15px] rounded-md "
      />
      <div className="flex gap-1">
        <label htmlFor="">Filter by: </label>
        <select
          value={filter}
          onChange={handleSelectionChange}
          className="border border-gray-400 rounded-md bg-gray-100 outline-0 py-1 px-1"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default SearchCountry;
