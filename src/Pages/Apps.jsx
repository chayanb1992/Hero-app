import React, { Suspense, useEffect, useState } from "react";
import ApplicationsHeader from "../Component/ApplicationHeader";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AppCard from "../Component/AppCard";
import AppNotFound from "./AppsNotFound";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cearched, setCearched] = useState([]);
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true); // initial loading
  const [searchLoading, setSearchLoading] = useState(false); // search loading

  // 🟢 Load data from JSON (with delay)
  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setAppsData(data);
          setApps(data);
          setCearched(data);
          setLoading(false);
        }, 1500);
      });
  }, []);
  // console.log(apps);
  // 🔍 Handle search with timeout
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setSearchLoading(true);

    // Add timeout to simulate async search
    setTimeout(() => {
      const results = apps.filter((app) =>
        app.title.toLowerCase().includes(value.toLowerCase())
      );
      setCearched(results);
      setSearchLoading(false);
    }, 800); // 0.8 seconds search delay
  };

  return (
    <div>
      {loading ? (
        // 🌀 Main data loading spinner
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div>
          <ApplicationsHeader
            handleSearch={handleSearch}
            dataLength={appsData.length}
          />

          {/* 🔍 Show loading spinner during search */}
          {searchLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 container mx-auto mb-6">
              <Suspense
                fallback={
                  <span className="loading loading-spinner loading-xl"></span>
                }
              >
                {cearched &&
                  cearched.length > 0 &&
                  cearched.map((data) => <AppCard key={data.id} data={data} />)}
              </Suspense>
            </div>
          )}
          {(cearched && cearched.length > 0) || <AppNotFound></AppNotFound>}
        </div>
      )}
    </div>
  );
};

export default Apps;
