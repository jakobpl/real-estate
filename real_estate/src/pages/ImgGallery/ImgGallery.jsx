import React from "react";
import classes from "./ImgGallery.module.css";

import img1 from "../../assets/gallery_img1.jpg";
import { useContext } from "react";
import LanguageContext from "../../store/language-context";
const ImgGallery = () => {
  const langCtx = useContext(LanguageContext);
  const { languageIsRussian } = langCtx;
  console.log(langCtx);
  return (
    <div className={classes["gallery-container"]}>
      <div className={`${classes["img-container"]} ${classes["img-1"]}`}>
        <div className={classes["property-info_container"]}>
          <h3 className={classes["count"]}>01</h3>
          <p className={classes["property-name"]}>
            {languageIsRussian ? "Москва" : "Moscow"}
          </p>
        </div>
      </div>
      <div className={`${classes["img-container"]} ${classes["img-2"]}`}>
        <div className={classes["property-info_container"]}>
          <h3 className={classes["count"]}>02</h3>
          <p className={classes["property-name"]}>
            {languageIsRussian ? "Санкт-Петербург" : "Saint Petersburg"}
          </p>
        </div>
      </div>
      <div className={`${classes["img-container"]} ${classes["img-3"]}`}>
        <div className={classes["property-info_container"]}>
          <h3 className={classes["count"]}>03</h3>
          <p className={classes["property-name"]}>
            {languageIsRussian ? "Новосибирск" : "	Novosibirsk"}
          </p>
        </div>
      </div>
      <div className={`${classes["img-container"]} ${classes["img-4"]}`}>
        <div className={classes["property-info_container"]}>
          <h3 className={classes["count"]}>04</h3>
          <p className={classes["property-name"]}>
            {languageIsRussian ? "Екатеринбург" : "Yekaterinburg"}
          </p>
        </div>
      </div>
    </div>
  );
};

// container with 4 columns

export default ImgGallery;
