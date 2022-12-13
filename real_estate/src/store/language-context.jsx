import React from "react";

const LanguageContext = React.createContext({
  language: "en-US",
  changeLanguageToRussian: () => {},
  changeLanguageToEnglish: () => {},
});

export default LanguageContext;
