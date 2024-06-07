import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [listItem, setListItem] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu listItem={listItem} setListItem={setListItem} />
      <FoodDisplay listItem={listItem} />
      <AppDownload />
    </div>
  );
};

export default Home;
