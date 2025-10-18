import React, { useEffect, useState } from "react";
import ApplicationsHeader from "../Component/ApplicationHeader";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { useLoaderData } from "react-router";
import AppCard from "../Component/AppCard";
import AppNotFound from "./AppsNotFound";

const Apps = () => {
  const appsData = useLoaderData();
  // console.log(appsData);
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cearched, setCearched] = useState();
  // Whenever appsData changes, update state
  // setApps(appsData);
  useEffect(() => {
    if (appsData) {
      // const appNames = appsData.map((app) => app.name);
      setApps(appsData);
      setCearched(appsData);
    }
  }, [appsData]);
  // const data = appsData.map((app) => setApps(app.name));
  // console.log(apps);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = apps.filter((app) =>
      app.name.toLowerCase().includes(value.toLowerCase())
    );
    // console.log(results);
    setCearched(results);
  };
  console.log(cearched);
  return (
    <div>
      <ApplicationsHeader
        handleSearch={handleSearch}
        dataLength={appsData.length}
      ></ApplicationsHeader>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100">
        {cearched &&
          cearched.map((data) => <AppCard key={data.id} data={data}></AppCard>)}
      </div>
      {cearched != 0 || <AppNotFound></AppNotFound>}
    </div>
  );
};

export default Apps;
