import React from "react";
import { FiSearch } from "react-icons/fi";
const ApplicationsHeader = ({ dataLength, handleSearch }) => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our All Applications
          </h2>
          <p className="mt-2 text-gray-500">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Count + Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-lg font-semibold text-gray-900">
            ({dataLength}) Apps Found
          </div>

          <div className="relative w-full max-w-sm">
            {/* Icon */}
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <FiSearch className="w-5 h-5" />
            </span>

            {/* Input */}
            <input
              type="text"
              onChange={handleSearch}
              placeholder="search Apps"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsHeader;
