import React, { useEffect, useState } from "react";
import { FaBell, FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import RatingsBarChart from "../Component/RatingsBarChart";
import { useLoaderData, useParams } from "react-router";
import {
  getIdFromLocalStorage,
  setIdToLocalStorage,
} from "../Utilitis/Utility";

const AppDetailsCard = () => {
  const appId = useParams();
  const allAppsData = useLoaderData();
  const [appData, setAppData] = useState();
  const [installedIds, setInstalledIds] = useState([]);
  useEffect(() => {
    const saved = getIdFromLocalStorage();
    setInstalledIds(saved);
  }, []);
  useEffect(() => {
    if (allAppsData && appId) {
      const data = allAppsData.find(
        (data) => String(data.id) === String(appId.id)
      );
      // console.log(data);
      setAppData(data);
    }
  }, [allAppsData, appId]);

  console.log(appData);
  if (!appData) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading app details...
      </div>
    );
  }
  const { name, downloads, rating, image, id, reviews, description } = appData;

  const handleAddItem = (id) => {
    const appsId = getIdFromLocalStorage();
    if (!appsId.includes(id)) {
      setIdToLocalStorage(id);
      setInstalledIds([...installedIds, id]);
    }
    // setDisabled(appsId.includes(id) && "disabled");
    // console.log(disabled);
  };
  const appsId = getIdFromLocalStorage();
  console.log(appsId);
  const isInstalled = installedIds.includes(id);
  return (
    <div>
      <div className="flex items-center justify-center p-6 sm:p-8 bg-gray-100 min-h-screen">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
          {/* Left Section: Icon */}
          <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-blue-50 flex items-center justify-center">
              <FaBell className="text-blue-600 text-8xl sm:text-9xl animate-pulse" />
              <div className="absolute w-20 h-20 border-4 border-blue-600 rounded-lg opacity-40"></div>
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="w-full md:w-2/3 p-6 sm:p-8 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200">
            {/* App Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              {name}
            </h2>

            {/* Developer Info */}
            <p className="text-gray-600 text-sm mb-6">
              Developed by{" "}
              <a
                href="#"
                className="text-purple-600 hover:underline font-medium"
              >
                productive.io
              </a>
            </p>

            <hr className="border-gray-300 mb-6" />

            {/* Metrics Section */}
            <div className="flex justify-between items-center mb-8 text-center">
              {/* Downloads */}
              <div className="w-1/3">
                <FaDownload className="text-3xl sm:text-4xl text-green-500 mx-auto mb-2" />
                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  Downloads
                </p>
                <p className="text-gray-900 text-2xl sm:text-3xl font-bold">
                  {downloads}
                </p>
              </div>

              {/* Average Ratings */}
              <div className="w-1/3 border-l border-r border-gray-300">
                <FaStar className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-2" />
                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  Average Rating
                </p>
                <p className="text-gray-900 text-2xl sm:text-3xl font-bold">
                  {rating}
                </p>
              </div>

              {/* Total Reviews */}
              <div className="w-1/3">
                <FaThumbsUp className="text-3xl sm:text-4xl text-purple-600 mx-auto mb-2" />
                <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  Total Reviews
                </p>
                <p className="text-gray-900 text-2xl sm:text-3xl font-bold">
                  {reviews}
                </p>
              </div>
            </div>

            {/* Install Button  disabled={appsId.includes(id)}*/}
            <button
              disabled={appsId.includes(id)}
              onClick={() => handleAddItem(id)}
              className={`w-full bg-green-500 hover:bg-green-600  text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg ${
                appsId.includes(id) && "disabled-class"
              }`}
            >
              {isInstalled ? "Installed" : "Install Now (291 MB)"}
            </button>
          </div>
        </div>
      </div>
      <RatingsBarChart></RatingsBarChart>

      <div>
        <h4>Description</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetailsCard;
