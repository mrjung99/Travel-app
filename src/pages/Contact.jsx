import React from "react";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formSubmitData = Object.fromEntries(formData);
    console.log(formSubmitData);
  };

  return (
    <div className="py-3 px-4 md:px-0 md:w-9/12 mx-auto md:mb-15 min-h-[83vh]">
      <div>
        <h1 className="text-4xl md:text-5xl md:mt-4 text-gray-800 font-semibold">
          Contact
        </h1>
        <p>Get in touch, we are always here to help you.</p>
      </div>
      <div className="mt-6 md:mt-0 flex flex-col gap-9 md:gap-0 md:flex-row md:justify-between md:items-center">
        <form
          action={handleFormSubmit}
          className="flex flex-col gap-2 md:gap-5 md:w-5/12"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            autoComplete="off"
            className="bg-gray-100 px-3 py-1.5 text-[14px] text-gray-800 rounded border 
            border-gray-600 outline-0"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="bg-gray-100 px-3 py-1.5 text-[14px] text-gray-800 rounded border 
            border-gray-600 outline-0"
          />
          <textarea
            name="message"
            id=""
            placeholder="Message"
            className="h-[100px] bg-gray-100 px-3 py-1.5 text-[14px] text-gray-800 rounded 
            border border-gray-600 outline-0"
          ></textarea>
          <button
            type="submit"
            className="bg-gray-800 text-gray-100  py-2 rounded cursor-pointer hover:bg-gray-100 hover:text-gray-800 outline outline-gray-400 
            transition-colors"
          >
            Submit
          </button>
        </form>
        <img src="/public/contact.png" alt="" className="md:w-[40%]" />
      </div>
    </div>
  );
};

export default Contact;
