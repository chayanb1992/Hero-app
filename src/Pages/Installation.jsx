import React, { useEffect, useState } from "react";
import InstalledAppCard from "../Component/InstallAppCard";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ApplicationsHeader from "../Component/ApplicationHeader";
import { useLoaderData } from "react-router";
import { getIdFromLocalStorage, removeItems } from "../Utilitis/Utility";
import InstalledAppsHeader from "../Component/InstalledAppsHeader";

const Installation = () => {
  const allData = useLoaderData();
  const [installedData, setInstalledData] = useState([]);
  const [sortData, setSortData] = useState([]);
  useEffect(() => {
    const installedId = getIdFromLocalStorage();
    if (!installedId || installedId.length === 0) return;
    const matchedApps = allData.filter((app) => installedId.includes(app.id));
    setInstalledData(matchedApps);
  }, [allData]);

  console.log(installedData);
  const handleSort = (type) => {
    let sorted = [];

    if (type === "name") {
      sorted = [...installedData].sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "rating") {
      sorted = [...installedData].sort((a, b) => b.rating - a.rating); // highest first
    }

    setSortData(sorted);

    // If you want to log new sorted data:
    console.log("Sorted:", sortData.length);
  };
  console.log("Sorted:", sortData.length);
  const handleLocalStorage = (id) => {
    removeItems(id);

    // 2️⃣ Update React state (so UI refreshes immediately)
    setInstalledData((prevData) => prevData.filter((app) => app.id !== id));

    // 3️⃣ Also update sorted data if needed
    setSortData((prevSort) => prevSort.filter((app) => app.id !== id));
    console.log(id);
  };
  return (
    <div>
      {/* <InstalledAppsHeader */}
      <InstalledAppsHeader
        data={installedData.length}
        handleSort={handleSort}
      ></InstalledAppsHeader>
      {sortData.length > 0
        ? sortData.map((data) => (
            <InstalledAppCard
              key={data.id}
              handleLocalStorage={handleLocalStorage}
              data={data}
            />
          ))
        : installedData.map((data) => (
            <InstalledAppCard
              key={data.id}
              handleLocalStorage={handleLocalStorage}
              data={data}
            />
          ))}
    </div>
  );
};

export default Installation;
