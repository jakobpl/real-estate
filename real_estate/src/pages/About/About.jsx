import React, { Fragment, useContext } from "react";
import classes from "./About.module.css";
import livingRoom from "../../assets/living_room.jpg";
import LanguageContext from "../../store/language-context";
const PropertyInfo = () => {
  const langCtx = useContext(LanguageContext);
  const { languageIsRussian } = langCtx;
  return (
    <Fragment>
      <div className={classes["about-container"]}>
        <div className={classes["about"]}>
          <h2 className={classes["about-heading"]}>
            <span className={classes["about-heading_page_number"]}>01</span>
            <span className={classes["about-heading_title"]}>
              {languageIsRussian ? "о компании" : "About"}
              {/* <span className={classes["about-heading_title__background_text"]}>
                {" "}
                {languageIsRussian ? "о компании" : "About"}
              </span> */}
            </span>
          </h2>
          <p className={classes["about-description"]}>
            <span>
              {languageIsRussian
                ? `Строительная компания VATANEN, существует на строительном рынке 15
              лет, компания строит дорогие коттеджи для богатых русских в
              Подмосковье, дома исключительно в скандинавском стиле.`
                : `The construction company VATANEN has been on the construction market for 15 years, the company builds expensive cottages for wealthy Russians in the Moscow region, houses exclusively in the Scandinavian style.`}
            </span>
            <span>
              {languageIsRussian
                ? `  Архитектор индивидуально для клиента разрабатывает проект.
                Клиентов у них много. Поэтому с продажами у них все хорошо. Есть
                собственный штат архитекторов из Швеции.`
                : `The architect develops the project individually for the client. They have many clients. Therefore, they are doing well with sales. We have our own staff of architects from Sweden.`}
            </span>
          </p>
        </div>
        <div className={classes["about-img_container"]}>
          <img src={livingRoom} />
        </div>
      </div>
      <div className={classes["property-stat_container"]}>
        <p className={classes["property-stat"]}>
          <span className={classes["quantity"]}>12</span>
          <span className={classes["property-stat_description"]}>
            {languageIsRussian ? "лет на рынке" : "Years on the market"}
          </span>
        </p>
        <p className={classes["property-stat"]}>
          <span className={classes["quantity"]}>94</span>
          <span className={classes["property-stat_description"]}>
            {languageIsRussian ? "уникальных проектов " : "Unique projects"}
          </span>
        </p>
        <p className={classes["property-stat"]}>
          <span className={classes["quantity"]}>100</span>
          <span className={classes["property-stat_description"]}>
            {languageIsRussian ? "человек в штате" : "people in the state"}
          </span>
        </p>
        <p className={classes["property-stat"]}>
          <span className={classes["quantity"]}>5+</span>
          <span className={classes["property-stat_description"]}>
            {languageIsRussian
              ? "архитекторов в швеции"
              : "architects  in sweden"}
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default PropertyInfo;
