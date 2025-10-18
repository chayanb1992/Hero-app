import React, { useEffect, useState } from "react";
import InstalledAppCard from "../Component/InstallAppCard";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ApplicationsHeader from "../Component/ApplicationHeader";
import { useLoaderData } from "react-router";
import { getIdFromLocalStorage, removeItems } from "../Utilitis/Utility";
import InstalledAppsHeader from "../Component/InstalledAppsHeader";
import { ToastContainer, toast } from "react-toastify";

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

  // console.log(installedData);
  const handleSort = (type) => {
    let sorted = [];

    if (type === "High-Low") {
      sorted = [...installedData].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    } else if (type === "Low-High") {
      sorted = [...installedData].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      ); // highest first
    }

    setSortData(sorted);

    // If you want to log new sorted data:
    // console.log("Sorted:", sortData.length);
  };
  // console.log("Sorted:", sortData.length);
  const handleLocalStorage = (id) => {
    removeItems(id);

    // 2️⃣ Update React state (so UI refreshes immediately)
    setInstalledData((prevData) => prevData.filter((app) => app.id !== id));

    // 3️⃣ Also update sorted data if needed
    setSortData((prevSort) => prevSort.filter((app) => app.id !== id));
    // console.log(id);
    toast.success("✅ App uninstall successfully!", {
      position: "top-right",
      autoClose: 1500,
    });
  };
  return (
    <div className="mb-6">
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
      <ToastContainer />;
    </div>
  );
};

export default Installation;
