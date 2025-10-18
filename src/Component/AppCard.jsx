import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { Link, useParams } from "react-router";
// import image from "../assets/demo-app (1).webp";

const AppCard = ({ data }) => {
  const { name, downloads, rating, image, id } = data;

  // console.log(appId);
  return (
    <Link to={`/apps/${id}`}>
      <div className="rounded-xl p-4 text-center shadow-sm hover:shadow-md transition bg-white">
        {/* Image */}
        <div className="rounded-lg mb-2 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Image</span>
          )}
        </div>

        {/* App Name */}
        <h3 className="text-[16px] font-semibold text-gray-800 truncate px-1">
          {name}
        </h3>

        {/* Downloads & Rating */}
        <div className="flex justify-between items-center text-xs mt-1 px-1">
          <div className="flex items-center text-green-500 bg-green-100 p-1 rounded-md">
            <FaDownload className="mr-1" />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center text-orange-400 bg-orange-100 p-1 rounded-md">
            <FaStar className="mr-1" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
