// name, email, phone, message, button
import React, { useContext } from "react";
import classes from "./Form.module.css";
import LanguageContext from "../../store/language-context";

const Form = () => {
  const langCtx = useContext(LanguageContext);
  const { languageIsRussian } = langCtx;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["form-heading"]}>
        {languageIsRussian ? "ОСТАВАЙТЕСЬ НА СВЯЗИ" : "Stay in touch"}
      </h2>
      <div className={classes["form-container"]}>
        <form className={classes["form"]} onSubmit={onSubmitHandler}>
          <input
            className={`${classes["form-input"]}`}
            type="text"
            id="name"
            placeholder={languageIsRussian ? "имя" : "Name"}
          />
          <input
            className={`${classes["form-input"]} ${classes["email"]}`}
            type="email"
            id="email"
            placeholder={languageIsRussian ? "Эл. адрес" : "Email"}
          />
          <input
            className={`${classes["form-input"]} ${classes["phone"]}`}
            type="tel"
            id="phone"
            placeholder={languageIsRussian ? "телефона" : "Phone"}
          />
          <textarea
            className={`${classes["form-textarea"]} ${classes["message"]}`}
            type="text"
            id="message"
            placeholder={languageIsRussian ? "твое сообщение" : "Your message"}
          />

          <button className={classes["button"]} type="submit">
            {languageIsRussian ? "послать сообщение" : "Send message"}
          </button>
        </form>
        <aside className={classes["info-container"]}>
          <div className={classes["container-phone"]}>
            <p className={classes["info-phone_number"]}>
              {languageIsRussian ? "+7 495 728-50-00" : "+1 202-298-5700"}
            </p>
            <p className={classes["info-phone_number"]}>
              {languageIsRussian ? "+7 495 123-45-67" : "+1 202-123-4567"}
            </p>
          </div>
          <div className={classes["container-email"]}>
            <p className={classes["info-email"]}>info@example.com</p>
            <p className={classes["info-email"]}>example@example.ru</p>
          </div>
          <div className={classes["container-address"]}>
            <address className={classes["info-address"]}>
              <span>
                {languageIsRussian
                  ? "Большой Девятинский Переулок Но. 8"
                  : "Bolshoy Devyatinsky Pereulok No. 8"}
              </span>
              <span>
                {languageIsRussian ? "8 Москов 121099" : "Moscow 121099"}
              </span>
              <span>{languageIsRussian ? "Россия" : "Russia"}</span>
            </address>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Form;
