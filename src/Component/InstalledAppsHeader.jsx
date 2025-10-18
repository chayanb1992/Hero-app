import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa";
const InstalledAppsHeader = ({ data, handleSort }) => {
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
            ({data}) Apps Found
          </div>

          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort by {<FaAngleDown />}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => handleSort("name")}>Name</a>
              </li>
              <li>
                <a onClick={() => handleSort("rating")}>Rating</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstalledAppsHeader;
