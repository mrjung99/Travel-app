import React, { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryDetails } from "../api/CountryApi";
import Loader from "../component/ui/Loader";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const CountryDetails = () => {
  const param = useParams();
  const [isPending, startTransition] = useTransition();
  const [countryDetail, setCountryDetail] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryDetails(param.id);
      if (res.status === 200) setCountryDetail(res.data[0]);
    });
  }, [param.id]);
  // console.log(Object.keys(countryDetail.name.nativeName));
  console.log(countryDetail);

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[90vh]">
        <Loader />
      </div>
    );
  }

  return (
    countryDetail && (
      <section
        className="flex flex-col items-center justify-center text-gray-900 bg-gray-200 
        my-7 shadow-md min-h-[77vh]"
      >
        <div className="py-5 flex flex-col md:flex-row justify-around md:items-center md:gap-20">
          <div className="">
            <img src={countryDetail.flags.png} alt="" />
          </div>
          <div className="text-[13px] md:text-[15px]">
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 mt-1 md:mt-0">
              {countryDetail.name.common}
            </p>
            <p>
              <span className="text-gray-700">Native name: </span>
              {Object.keys(countryDetail.name.nativeName)
                .map((key) => {
                  return countryDetail.name.nativeName[key].common;
                })
                .join(", ")}
            </p>
            <p>
              <span className="text-gray-700">Capital: </span>
              {countryDetail.capital[0]}
            </p>
            <p>
              <span className="text-gray-700">Region: </span>
              {countryDetail.region}
            </p>
            <p>
              <span className="text-gray-700">Sub-region: </span>
              {countryDetail.subregion}
            </p>
            <p>
              <span className="text-gray-700">Continents: </span>
              {countryDetail.continents[0]}
            </p>
            <p>
              <span className="text-gray-700">Population: </span>
              {countryDetail.population.toLocaleString()}
            </p>
            <p>
              <span className="text-gray-700">Language: </span>
              {Object.keys(countryDetail.languages)
                .map((key) => {
                  return countryDetail.languages[key];
                })
                .join(", ")}
            </p>
            <p>
              <span className="text-gray-700">Currencies: </span>
              {Object.keys(countryDetail.currencies)
                .map((key) => {
                  return countryDetail.currencies[key].name;
                })
                .join(", ")}
            </p>
            <p>
              <span className="text-gray-700">Timezones: </span>
              {countryDetail.timezones[0]}
            </p>
            <p>
              <span className="text-gray-700">Top level domain: </span>
              {countryDetail.tld[0]}
            </p>
            <p>
              <span className="text-gray-700">Start of Week: </span>
              {countryDetail.startOfWeek.charAt(0).toUpperCase() +
                countryDetail.startOfWeek.slice(1)}
            </p>
          </div>
        </div>
        <NavLink to="/country">
          <button
            className="bg-gray-100 hover:bg-gray-800 text-gray-800 hover:text-gray-100 px-5 py-1 rounded-md 
              cursor-pointer outline outline-gray-400 mt-6 transition-colors my-5 md:my-10 flex items-center gap-2"
          >
            <MdOutlineKeyboardBackspace />
            <span>Go Back</span>
          </button>
        </NavLink>
      </section>
    )
  );
};

export default CountryDetails;
