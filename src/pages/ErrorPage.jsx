import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-lvh">
      <h1 className="text-5xl font-semibold">Oops, something went wrong !!</h1>
      <p className="text-3xl mt-3">{error && error.data}</p>
      <NavLink to="/" className="mt-15">
        <button
          className="bg-red-700 text-white px-3 py-1 rounded cursor-pointer
        hover:bg-red-600"
        >
          Go back
        </button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
