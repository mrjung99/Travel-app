import React from "react";

const AboutCard = ({ data }) => {
  return (
    <ul className="grid md:grid-cols-3 gap-8 w-10/12 md:w-9/12 mx-auto mt-6 ">
      {data.map((currData) => {
        return (
          <li className="bg-gray-200 p-3 rounded-xl outline-1 outline-gray-400 shadow-md">
            <p className="text-gray-800 text-xl md:text-2xl font-semibold">
              {currData.name}
            </p>
            <div className="mt-2">
              <p className="text-gray-800 text-[14px]">
                <span className="text-gray-700">Capital: </span>
                {currData.capital}
              </p>
              <p className="text-gray-800 text-[14px]">
                <span className="text-gray-700">Population: </span>
                {currData.population}
              </p>
              <p className="text-gray-800 text-[14px]">
                <span className="text-gray-700">Interesting fact: </span>
                {currData.fact}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AboutCard;
