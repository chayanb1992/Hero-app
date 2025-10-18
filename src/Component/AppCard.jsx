import React from "react";
import { FaStar, FaDownload } from "react-icons/fa";
import { Link } from "react-router";
// import image from "../assets/demo-app (1).webp";

const AppCard = ({ data }) => {
  const { title, downloads, ratingAvg, image, id } = data;
  // console.log(data);
  // console.log(title);
  // console.log(appId);
  return (
    <Link to={`/apps/${id}`}>
      <div className="rounded-xl p-4 text-center shadow-sm hover:shadow-md transition bg-white">
        <div className="rounded-lg mb-2 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Image</span>
          )}
        </div>

        <h3 className="text-[16px] font-semibold text-gray-800 truncate px-1">
          {title}
        </h3>

        <div className="flex justify-between items-center text-xs mt-1 px-1">
          <div className="flex items-center text-green-500 bg-green-100 p-1 rounded-md">
            <FaDownload className="mr-1" />
            <span>{downloads}</span>
          </div>
          <div className="flex items-center text-orange-400 bg-orange-100 p-1 rounded-md">
            <FaStar className="mr-1" />
            <span>{ratingAvg}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
