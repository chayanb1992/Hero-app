import React from "react";

const Trusted = () => {
  // Data for the three metric card

  return (
    <section className="bg-gradient-to-tl to-[#6A11CB] from-[#9F62F2] text-white py-16 px-4 text-center ">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div>
            <p className="mt-4 text-lg font-semibold">Total Downloads</p>
            <h3 className="text-5xl font-extrabold">29.6M</h3>
            <p className="text-gray-200 mt-2 text-sm">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="mt-4 text-lg font-semibold">Total Reviews</p>
            <h3 className="text-5xl font-extrabold">906K</h3>
            <p className="text-gray-200 mt-2 text-sm">
              46% More Than Last Month
            </p>
          </div>

          <div>
            <p className="mt-4 text-lg font-semibold">Active Apps</p>
            <h3 className="text-5xl font-extrabold">132+</h3>
            <p className="text-gray-200 mt-2 text-sm">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
