import React from "react";
import error from "../assets/App-Error.png";
const AppNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      {/* Image */}
      <img src={error} alt="App Not Found" className="max-w-xs w-full mb-6" />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
        OPPS!! APP NOT FOUND
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-6">
        The App you are requesting is not found on our system. Please try
        another app.
      </p>

      {/* Button */}
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
      >
        Go Back!
      </button>
    </div>
  );
};

export default AppNotFound;
