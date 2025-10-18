import React from "react";

const ratingsData = [
  { stars: "5 Star", count: 9000 },
  { stars: "4 Star", count: 6000 },
  { stars: "3 Star", count: 3000 },
  { stars: "2 Star", count: 2000 },
  { stars: "1 Star", count: 1000 },
];

const maxCount = Math.max(...ratingsData.map((r) => r.count));

const RatingsBarChart = () => {
  return (
    <div className="w-full max-w-xl mx-auto p-4 container">
      <h2 className="text-xl font-semibold mb-4">Ratings</h2>
      {ratingsData.map((rating, index) => (
        <div key={index} className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">
              {rating.stars}
            </span>
            <span className="text-sm text-gray-500">{rating.count}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-orange-500 h-4 rounded-full"
              style={{ width: `${(rating.count / maxCount) * 100}%` }}
            ></div>
          </div>
        </div>
      ))}
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>0</span>
        <span>3000</span>
        <span>6000</span>
        <span>9000</span>
      </div>
    </div>
  );
};

export default RatingsBarChart;
