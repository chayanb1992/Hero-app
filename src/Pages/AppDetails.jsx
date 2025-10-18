import React, { useEffect, useState } from "react";
import { FaBell, FaDownload, FaStar, FaThumbsUp } from "react-icons/fa";
import RatingsBarChart from "../Component/RatingsBarChart";
import { useLoaderData, useParams } from "react-router";
import {
  getIdFromLocalStorage,
  setIdToLocalStorage,
} from "../Utilitis/Utility";
import { ToastContainer, toast } from "react-toastify";

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

  // console.log(appData);
  if (!appData) {
    return (
      <div className="flex justify-center items-center h-screen text-lg text-gray-500">
        Loading app details...
      </div>
    );
  }
  const {
    title,
    downloads,
    ratingAvg,
    image,
    id,
    reviews,
    description,
    ratings,
  } = appData;

  const handleAddItem = (id) => {
    const appsId = getIdFromLocalStorage();

    if (!appsId.includes(id)) {
      setIdToLocalStorage(id);
      setInstalledIds([...installedIds, id]);
      toast.success("✅ App installed successfully!", {
        position: "top-right",
        autoClose: 1500,
      });
    } else {
      toast.info("✔️ Already installed!", {
        position: "top-center",
        autoClose: 1500,
      });
    }
  };
  const appsId = getIdFromLocalStorage();
  // console.log(appsId);
  const isInstalled = installedIds.includes(id);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex items-center justify-center p-6 sm:p-8 min-h-screen container mx-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
            <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-blue-50 flex items-center justify-center">
                <img src={image} alt="App image" />
                <div className="absolute w-20 h-20 border-4 border-blue-600 rounded-lg opacity-40"></div>
              </div>
            </div>

            <div className="w-full md:w-2/3 p-6 sm:p-8 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                {title}
              </h2>

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

              <div className="flex justify-between items-center mb-8 text-center">
                <div className="w-1/3">
                  <FaDownload className="text-3xl sm:text-4xl text-green-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                    Downloads
                  </p>
                  <p className="text-gray-900 text-2xl sm:text-3xl font-bold">
                    {downloads}
                  </p>
                </div>

                <div className="w-1/3 border-l border-r border-gray-300">
                  <FaStar className="text-3xl sm:text-4xl text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                    Average Rating
                  </p>
                  <p className="text-gray-900 text-2xl sm:text-3xl font-bold">
                    {ratingAvg}
                  </p>
                </div>

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
      </div>
      <RatingsBarChart ratings={ratings}></RatingsBarChart>
      <div className="container mx-auto">
        <h4>Description</h4>
        <p>{description}</p>
      </div>
      <ToastContainer />;
    </div>
  );
};

export default AppDetailsCard;
