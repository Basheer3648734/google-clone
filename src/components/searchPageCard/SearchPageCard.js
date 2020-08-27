import React from "react";
import styles from "./SearchPageCard.module.css";
function SearchPageCard({ displayUrl, url, title, snippet }) {
  return (
    <div className={styles.searchPageCard}>
      <p className={styles.searchPageCard__displayUrl}>{displayUrl}</p>
      <a href={url} className={styles.searchPageCard__url}>
        {title}
      </a>
      <p
        className={styles.searchPageCard__snippet}
        dangerouslySetInnerHTML={{ __html: snippet }}
      ></p>
    </div>
  );
}

export default SearchPageCard;
