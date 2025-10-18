import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import SeeMoreButton from "./SeeMoreButton";

const AppsContainer = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch JSON file from public folder
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        // ⏳ Add delay before showing data
        setTimeout(() => {
          const limitedData = data.slice(0, 8);
          setAppsData(limitedData);
          setLoading(false);
        }, 1500); // 1.5 seconds delay
      });
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {appsData.map((data) => (
              <AppCard key={data.id} data={data} />
            ))}
          </div>
          <SeeMoreButton />
        </>
      )}
    </div>
  );
};

export default AppsContainer;
