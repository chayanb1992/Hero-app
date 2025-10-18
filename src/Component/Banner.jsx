import React from "react";
import { FaCheckCircle, FaStopwatch, FaSave, FaClock } from "react-icons/fa";
import bannerImg from "../assets/hero.png"; // adjust path as needed
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";

const Banner = () => {
  return (
    <section className="bg-[#F9FAFB] flex flex-col items-center text-center py-16 px-6">
      {/* Headings */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="max-w-xl text-gray-600 mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      {/* Store Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="bg-white shadow-md border border-gray-200 px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 active:bg-gray-200 transition">
          <img src={playStore} alt="Google Play" className="w-30 rounded-md" />
        </button>
        <button className="bg-white shadow-md border border-gray-200 px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 active:bg-gray-200 transition">
          <img src={appStore} alt="App Store" className="w-30 rounded-md" />
        </button>
      </div>

      {/* Banner Image */}
      <div className="relative mt-10 w-full max-w-md">
        <img
          src={bannerImg}
          alt="App Preview"
          className="rounded-3xl mx-auto w-full"
        />

        {/* Floating Icons */}
        {/* <FaCheckCircle className="text-blue-500 text-3xl absolute -left-8 top-20 bg-white rounded-full shadow-md p-2" />
        <FaStopwatch className="text-sky-500 text-3xl absolute left-8 -top-8 bg-white rounded-full shadow-md p-2" />
        <FaClock className="text-red-500 text-3xl absolute -right-8 top-24 bg-white rounded-full shadow-md p-2" />
        <FaSave className="text-green-500 text-3xl absolute right-8 -bottom-6 bg-white rounded-full shadow-md p-2" /> */}
      </div>
    </section>
  );
};

export default Banner;
