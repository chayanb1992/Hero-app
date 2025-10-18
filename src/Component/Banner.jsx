import React from "react";
import { FaCheckCircle, FaStopwatch, FaSave, FaClock } from "react-icons/fa";
import bannerImg from "../assets/hero.png"; // adjust path as needed
import appStore from "../assets/app-store.png";
import playStore from "../assets/play-store.png";

const Banner = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6 container mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="max-w-xl text-gray-600 mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>

      <div className="flex gap-4 mt-6">
        <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white shadow-md border border-gray-200 px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 active:bg-gray-200 transition">
            <img
              src={playStore}
              alt="Google Play"
              className="w-30 rounded-md"
            />
          </button>
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white shadow-md border border-gray-200 px-2 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 active:bg-gray-200 transition">
            <img src={appStore} alt="App Store" className="w-30 rounded-md" />
          </button>
        </a>
      </div>

      <div className="relative mt-10 w-full max-w-md">
        <img
          src={bannerImg}
          alt="App Preview"
          className="rounded-3xl mx-auto w-full"
        />
      </div>
    </section>
  );
};

export default Banner;
