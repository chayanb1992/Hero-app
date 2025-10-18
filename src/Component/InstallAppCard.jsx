import React from "react";

const InstalledAppCard = ({ data, handleLocalStorage }) => {
  const { name, downloads, rating, image, id, reviews, description } = data;
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-md w-full">
      {/* App Icon Placeholder */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-md mr-4" />

        {/* App Info */}
        <div className="flex flex-col space-y-1">
          {/* Title */}
          <div className="text-sm font-medium text-gray-900">{name}</div>

          {/* Stats */}
          <div className="flex items-center text-xs text-gray-600 space-x-4">
            <div className="flex items-center space-x-1 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l6-6 4 4 6-6"
                />
              </svg>
              <span>{downloads}</span>
            </div>

            <div className="flex items-center space-x-1 text-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.785.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.119l-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.951z" />
              </svg>
              <span>{rating}</span>
            </div>

            <div className="text-gray-500">258 MB</div>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleLocalStorage(id)}
          className="py-2 text-sm px-3 bg-green-500 text-white rounded-md"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
