import React from "react";
import Styles from "./Home.module.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";

import SearchBar from "../SearchBar/SearchBar";
const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles.home__header}>
        <p>Gmail</p>
        <p>Images</p>
        <AppsIcon />
        <AccountCircleIcon />
      </div>
      <div className={Styles.home__body}>
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
