import React from "react";

const SeeMoreButton = () => {
  return (
    <div className="text-center w-full my-6 container mx-auto">
      <a href="/apps">
        <button className="py-1 px-2 cursor-pointer text-sm rounded-md bg-linear-to-r to-[#6B35E5] from-[#975BF0] text-white ">
          Show All
        </button>
      </a>
    </div>
  );
};

export default SeeMoreButton;
