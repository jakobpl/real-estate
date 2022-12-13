import React, { useState } from "react";
import LanguageContext from "./language-context";

const LanguageProvider = (props) => {
  const [languageRussian, setLanguageRussian] = useState(false);
  const changeLanguageToEnglish = () => {
    setLanguageRussian(false);
  };
  const changeLanguageToRussian = () => {
    setLanguageRussian(true);
  };
  const languageContext = {
    languageIsRussian: languageRussian,
    setEnglish: changeLanguageToEnglish,
    setRussian: changeLanguageToRussian,
  };
  return (
    <LanguageContext.Provider value={languageContext}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
