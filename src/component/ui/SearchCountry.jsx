import { useState } from "react";
import { BsSortUp } from "react-icons/bs";
import { BsFilterLeft } from "react-icons/bs";

const SearchCountry = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
  originalCopyCountries,
}) => {
  const [sort, setSort] = useState("none");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSelectionChange = (e) => {
    setFilter(e.target.value);
  };

  const sortCountry = (value) => {
    const sorted = JSON.parse(JSON.stringify(countries)).sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    if (value === "none") return setCountries(originalCopyCountries);

    setCountries(sorted);
  };

  const handleSortSelection = (e) => {
    const value = e.target.value;
    setSort(value);
    sortCountry(value);
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-10  mb-8">
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={handleInputChange}
        className="bg-gray-100 md:w-5/12 py-2 px-3 border border-gray-400 outline-0 text-gray-800
        text-[15px] rounded-md "
      />
      <div className="flex justify-between md:gap-7 text-[13px]">
        <div className="flex  gap-1 text-gray-800">
          <label htmlFor="" className="flex items-center justify-center gap-1">
            <span>Filter</span>
            <BsFilterLeft size={23} />
          </label>
          <select
            value={filter}
            onChange={handleSelectionChange}
            className="border border-gray-400 rounded-md bg-gray-100 outline-0 py-1 px-1 text-gray-800"
          >
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div className="flex gap-1 items-center text-gray-800">
          <label htmlFor="" className="flex items-center gap-1">
            <span>Sort</span>
            <BsSortUp size={23} />
          </label>
          <select
            className="outline-0 border border-gray-400 px-2 py-1 rounded-md bg-gray-100 text-gray-800"
            value={sort}
            onChange={handleSortSelection}
          >
            <option value="none">None</option>
            <option value="asc">Asc</option>
            <option value="des">Des</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchCountry;
