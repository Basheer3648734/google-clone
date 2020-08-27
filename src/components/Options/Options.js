import React from "react";
import Styles from "./options.module.css";
function Options({ label, Icon, active, clickHanlder }) {
  const classes = [Styles.options];
  if (active) classes.push(Styles.active);
  return (
    <div onClick={clickHanlder} className={classes.join(" ")}>
      <Icon />
      <p>{label}</p>
    </div>
  );
}

export default Options;
