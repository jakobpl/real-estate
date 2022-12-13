import React, { Fragment, useState } from "react";
import Header from "../../components/Header/Header";
import classes from "./Hero.module.css";
import { useContext } from "react";
import LanguageContext from "../../store/language-context";
const Hero = () => {
  const langCtx = useContext(LanguageContext);
  const { languageIsRussian } = langCtx;
  return (
    <Fragment>
      <main className={classes["hero"]}>
        <Header />
        <section className={classes["section"]}>
          <h1 className={classes["hero-h1"]}>
            {!languageIsRussian
              ? "Finding your perfect home, one key at a time."
              : "Поиск вашего идеального дома, по одному ключу за раз."}
          </h1>
          <a className={classes["btn"]} href="#">
            <span>
              {!languageIsRussian ? "View listings" : "просмотреть списки"}
            </span>
          </a>
        </section>
      </main>
      <aside className={classes["resource-container"]}>
        <div className={classes["language-select"]}>
          <button
            className={`${classes["language-option"]} ${
              languageIsRussian
                ? classes["active-language"]
                : classes["inactive-language"]
            }`}
            onClick={langCtx.setRussian}
          >
            RU
          </button>
          <button
            className={`${classes["language-option"]} ${
              !languageIsRussian
                ? classes["active-language"]
                : classes["inactive-language"]
            }`}
            onClick={langCtx.setEnglish}
          >
            EN
          </button>
        </div>
        <div className={classes["resource-contact_info"]}>
          <address>
            {languageIsRussian
              ? "Большой Девятинский Переулок Но. 8 Москов 121099"
              : "Bolshoy Devyatinsky Pereulok No. 8 Moscow 121099"}
          </address>
          <p>{languageIsRussian ? "mail@mail.ru" : "email@email.com"}</p>
          <p>{languageIsRussian ? "+7 495 728-50-00" : "+1 202-298-5700"}</p>
        </div>
      </aside>
      {/* <Form /> */}
    </Fragment>
  );
};

export default Hero;
