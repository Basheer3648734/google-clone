import React, { useState } from "react";
import styles from "./SearchPage.module.css";
import { useContextState } from "../../stateProvider";
import useGoogle from "../../useGoogle";
import SearchBar from "../SearchBar/SearchBar";
import Options from "../Options/Options.js";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchPageCard from "../searchPageCard/SearchPageCard";
function SearchPage() {
  const [{ term }, dispatch] = useContextState();
  const [selectedOption, setSelectedOption] = useState("all");
  const { data } = useGoogle(term);
  console.log(data);
  const headerOptions = [
    {
      label: "All",
      icon: SearchIcon,
      id: "all",
    },
    {
      label: "News",
      icon: SearchIcon,
      id: "news",
    },
    {
      label: "Images",
      icon: ImageOutlinedIcon,
      id: "images",
    },
    {
      label: "Shopping",
      icon: LocalOfferIcon,
      id: "shopping",
    },
    {
      label: "Maps",
      icon: RoomIcon,
      id: "maps",
    },
    {
      label: "More",
      icon: MoreVertIcon,
      id: "more",
    },
  ];
  return (
    <div className={styles.searchPage}>
      <div className={styles.searchPage__header}>
        <div className={styles.header__input}>
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
          <SearchBar hideButtons margin="0px" />
        </div>
        <div className={styles.header__options}>
          {headerOptions.map((opt) => (
            <Options
              label={opt.label}
              Icon={opt.icon}
              active={opt.active}
              key={opt.id}
              active={selectedOption === opt.id}
              clickHanlder={(e) => setSelectedOption(opt.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.searchPage__body}>
        <p className={styles.body__searchInfo}>
          About {data?.searchInformation.formattedTotalResults} results (
          {data?.searchInformation.formattedSearchTime} seconds){" "}
        </p>
        <div className={styles.body__results}>
          {data?.items.map((item, index) => (
            <SearchPageCard
              displayUrl={item.displayLink}
              url={item.link}
              title={item.title}
              snippet={item.htmlSnippet}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
