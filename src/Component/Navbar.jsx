import React, { useEffect, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("apps")) {
      setActiveTab("apps");
    } else if (location.pathname.includes("installation")) {
      setActiveTab("installation");
    } else {
      setActiveTab("home");
    }
  }, [location.pathname]);
  // console.log(location);
  // console.log(activeTab);
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar bg-base-100 mx-auto container">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiAlignJustify className="text-xl" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="relative group text-center hover:text-violet-600 font-semibold active:bg-white text-[18px]">
                <Link to="/">Home</Link>
              </li>
              <li className="relative group text-center hover:text-violet-600 font-semibold active:bg-white text-[18px]">
                <Link to={"./apps"}>Apps</Link>
              </li>
              <li className="relative group text-center hover:text-violet-600 font-semibold active:bg-white text-[18px]">
                <Link to="./installation">Installation</Link>
              </li>
            </ul>
          </div>
          <a href="/" className="flex items-center text-md font-semibold">
            <img className="w-8" src={logo} alt="Logo Image" />
            <span>HERO.IO</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li
              onClick={() => setActiveTab("home")}
              className={`relative group text-center hover:text-violet-600 ${
                activeTab === "home" && "text-violet-600"
              } font-semibold active:bg-white`}
            >
              <Link to="/">
                <span className="ease absolute left-1/2 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full group-hover:left-0 z-10"></span>
                <span
                  className={`${
                    activeTab === "home" ? "border-violet-600" : "border-white"
                  } absolute left-0 bottom-0 h-0 w-full border-t-2`}
                ></span>
                {/* <span class="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-1/2"></span> */}
                <span className="">Home</span>
              </Link>
            </li>
            <li
              onClick={() => setActiveTab("apps")}
              className={`relative group text-center hover:text-violet-600 ${
                activeTab === "apps" && "text-violet-600"
              } font-semibold active:bg-white`}
            >
              <Link to={"./apps"}>
                <span className="ease absolute left-1/2 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full group-hover:left-0 z-10"></span>
                <span
                  className={`${
                    activeTab === "apps" ? "border-violet-600" : "border-white"
                  } absolute left-0 bottom-0 h-0 w-full border-t-2 z-0`}
                ></span>
                {/* <span class="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-1/2"></span> */}
                <span className="">Apps</span>
              </Link>
            </li>
            <li
              onClick={() => setActiveTab("installation")}
              className={`relative group text-center hover:text-violet-600 ${
                activeTab === "installation" && "text-violet-600"
              } font-semibold active:bg-white`}
            >
              <Link to="./installation">
                <span className="ease absolute left-1/2 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full group-hover:left-0 z-10"></span>
                <span
                  className={`${
                    activeTab === "installation"
                      ? "border-violet-600"
                      : "border-white"
                  } absolute left-0 bottom-0 h-0 w-full border-t-2`}
                ></span>
                {/* <span class="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-1/2"></span> */}
                <span className="">Installation</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"https://github.com/chayanb1992"}>
            <button className="btn bg-linear-to-r to-[#6B35E5] from-[#975BF0] text-white ">
              <FaGithub /> Contribute
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
