import React from "react";
import gif from "./../../../img/loading.gif"
import style from "./Preloader.module.css"

let Preloader = () =>{
  return <div className={style.preloaderContainer}>
      <img src={gif} alt=""/>
  </div>
};

export default Preloader