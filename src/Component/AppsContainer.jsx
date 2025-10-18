import React, { use } from "react";
// import data from "/apps.json";
import { useLoaderData } from "react-router";
import AppCard from "./AppCard";
import SeeMoreButton from "./SeeMoreButton";
const AppsContainer = () => {
  const appsData = useLoaderData();
  //   const finsl = JSON.parse(data);
  //   console.log(data);
  //   console.log(finsl);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100">
        {appsData.map((data) => (
          <AppCard key={data.id} data={data}></AppCard>
        ))}
      </div>
      <SeeMoreButton></SeeMoreButton>
    </div>
  );
};

export default AppsContainer;
