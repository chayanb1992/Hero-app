import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Trusted from "../Component/Trusted";
import Trending from "../Component/Trending";
import AppsContainer from "../Component/AppsContainer";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Trusted></Trusted>
      <Trending></Trending>
      <AppsContainer></AppsContainer>
    </div>
  );
};

export default Home;
