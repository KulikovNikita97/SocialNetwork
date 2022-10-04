import React from "react";
import preloader from "./preloaderScoot.gif";
import s from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt=""/>
      <div className={s.li}>please, wait a bit</div>
    </div>
  );
};

export default Preloader;
