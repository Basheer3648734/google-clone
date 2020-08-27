import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import styles from "./SearchBar.module.css";
import { useContextState } from "../../stateProvider";
import { action_types } from "../../reducer";
import { useHistory } from "react-router-dom";
function SearchBar({ hideButtons, margin }) {
  const [{ term }, dispatch] = useContextState();
  const [searchTerm, setSearchTerm] = useState(term && hideButtons ? term : "");
  const history = useHistory();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: action_types.SEARCH_TERM, term: searchTerm });
    history.push("/search");
  };
  return (
    <form className={styles.searchBar} style={{ marginBottom: margin }}>
      <div className={styles.searchBar__input}>
        <SearchIcon />
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className={styles.searchBar__buttons}>
          <button onClick={clickHandler} type="submit">
            Google Search
          </button>
          <button>I'm feeling lucky</button>
        </div>
      ) : (
        <div
          className={[
            styles.searchBar__buttons,
            styles["searchBar__buttons--hidden"],
          ].join(" ")}
        >
          <button onClick={clickHandler} type="submit">
            Google Search
          </button>
          <button>I'm feeling lucky</button>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
