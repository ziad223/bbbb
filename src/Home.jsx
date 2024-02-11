import React from "react";
import Header from "./components/header/Header";
import FeatureCategories from "./components/featureCategories/FeatureCategories";
import TrendingProduct from "./components/trendingProduct/TrendingProduct";
import Banner from "./components/banner/Banner";
import Team from "./components/team/Team";
import Popular from "./popular/Popular";

const Home = ({addToCart}) => {
  return (
    <div>
      <Header />
      <FeatureCategories />
      <TrendingProduct />
      <Banner />
      <Team />
      <Popular />
    </div>
  );
};

export default Home;
