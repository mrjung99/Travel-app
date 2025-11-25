import React from "react";
import footerData from "../../api/footer.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const footerIcons = {
    FaLocationDot: <FaLocationDot />,
    IoCall: <IoCall />,
    MdMarkEmailUnread: <MdMarkEmailUnread />,
  };

  const now = new Date();
  const year = now.getFullYear();

  return (
    <section className="bg-gray-900 text-gray-400">
      <div className="flex flex-wrap items-center justify-around py-3 bg-gray-800">
        {footerData.map((data, index) => {
          return (
            <div key={index} className="flex items-center gap-1">
              <p className="text-2xl md:text-3xl text-blue-400">
                {footerIcons[data.icon]}
              </p>
              <div>
                <p className="font-semibold text-[14px]">{data.title}</p>
                <p className="text-[12px]">{data.details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="p-3">
        <p className="flex items-center justify-center text-[12px]">
          Copyright <FaRegCopyright />
          {year}, All right reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
