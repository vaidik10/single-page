import React from "react";
import { Image } from "antd";
import style from "./processcard.module.css";
function OurProcessCard({ title, content, imgSrc }) {
 

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image height={250} width={250} className={style.imgstyle} src={imgSrc} />
      </div>

      <div className={style.content}>
        <h2>{title}</h2>
        <p>{content}</p>
        <button className={style.btn}>
          get in touch
        </button>
      </div>
    </div>
  );
}

export default OurProcessCard;
