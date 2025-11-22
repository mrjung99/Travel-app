import React from "react";

const Home = () => {
  return (
    <div
      className="md:w-9/12 px-5 mt-20 md:mt-0 md:px-0 md:mx-auto flex flex-col gap-10 items-center 
      md:flex-row md:gap-8 h-[55vh]"
    >
      <div className="flex flex-col gap-3 order-2 md:order-1">
        <p className="text-3xl md:text-4xl font-bold">
          Explore the world, one Country at a time.
        </p>
        <p>
          Discover the history, culture and beauty of every nation. Sort, search
          and filter through countries to find the details you need.
        </p>
        <button
          className="bg-gray-950 text-white rounded-full py-1.5 px-5 w-fit cursor-pointer
          hover:bg-gray-800 transition-colors outline outline-gray-600 mt-3"
        >
          Start Exploring
        </button>
      </div>
      <img
        src="/public/travel.png"
        alt=""
        className="order-1 md:order-2 w-[480px]"
      />
    </div>
  );
};

export default Home;
