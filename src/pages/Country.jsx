import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/CountryApi";
import Loader from "../component/ui/Loader";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import SearchCountry from "../component/ui/SearchCountry";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [originalCopyCountries, setOriginalCopyCountries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
      setOriginalCopyCountries(res.data); //this will be used when the sort method is used
    });
  }, []);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Loader />
      </div>
    );
  }

  //---------------search and filter functionality----------------------
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  //filter country
  const filterCountry = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  //search country
  const searchFilterResult = countries.filter((country) => {
    return searchCountry(country) && filterCountry(country);
  });

  return (
    <section className="w-10/12 md:w-9/12 min-h-[82vh] mx-auto my-6">
      <SearchCountry
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
        originalCopyCountries={originalCopyCountries}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {searchFilterResult.map((country, index) => {
          return (
            <li
              key={index}
              className="p-2 border border-gray-300 bg-gray-100 shadow-md 
              hover:border-gray-700 hover:bg-gray-300 rounded-md transition-colors"
            >
              <img src={country.flags.png} alt="" className="w-full" />
              <div className="my-2 text-[13px]">
                <p className="text-lg text-gray-800 font-semibold">
                  {country.name.common}
                </p>
                <p>
                  <span className="text-gray-700">Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="text-gray-700">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="text-gray-700">Region: </span>
                  {country.region}
                </p>
              </div>
              <NavLink to={`/country/${country.name.common}`}>
                <button
                  className="flex  items-center gap-2 bg-gray-100 outline text-gray-800 text-[13px] 
                  px-3 py-1 rounded-md cursor-pointer hover:bg-gray-900 hover:text-gray-100
                  transition-all"
                >
                  <span>See more</span> <FaLongArrowAltRight />
                </button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Country;
