import React from "react";
import About from "./About";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="md:w-9/12 px-5 mt-20 md:mt-0 md:px-0 md:mx-auto flex flex-col gap-10 mb-20 
        md:mb-0 items-center 
        md:flex-row md:gap-8 md:h-[62vh]"
      >
        <div className="flex flex-col gap-3 order-2 md:order-1">
          <p className="text-3xl md:text-4xl font-bold">
            Explore the world, one Country at a time.
          </p>
          <p>
            Discover the history, culture and beauty of every nation. Sort,
            search and filter through countries to find the details you need.
          </p>
          <NavLink to="/country">
            <button
              className="bg-gray-100 text-gray-900 rounded-full py-1.5 px-4 w-fit cursor-pointer
          hover:bg-gray-900 hover:outline hover:text-gray-200 transition-colors outline 
          outline-gray-600 mt-3 flex items-center gap-1"
            >
              Start Exploring
              <p className="text-2xl">
                <MdKeyboardArrowRight />
              </p>
            </button>
          </NavLink>
        </div>
        <img
          src="/public/travel.png"
          alt=""
          className="order-1 md:order-2 w-[480px]"
        />
      </div>
      <section className="bg-gray-100">
        <About />
      </section>
    </>
  );
};

export default Home;
