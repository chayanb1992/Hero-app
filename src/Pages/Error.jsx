import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md">
        <div className="mb-6">
          <div className="relative w-full flex justify-center">
            <div className="text-purple-600 text-6xl font-bold">404</div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Oops, page not found!
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
