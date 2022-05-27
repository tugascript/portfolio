import React from "react";

export type languageEnum = "pt" | "en";

export interface IPreferencesState {
  language: languageEnum;
}

interface IPreferencesCtx extends IPreferencesState {
  changeLanguage: (language: languageEnum) => void;
}

interface IProps {
  children: React.ReactNode;
}

export const PreferencesCtx = React.createContext(
  {}
) as unknown as React.Context<IPreferencesCtx>;

const PreferencesCtxProvider: React.FC<IProps> = ({ children }) => {
  const [language, setLanguage] = React.useState<languageEnum>("en");

  const changeLanguage = (lang: languageEnum): void => {
    setLanguage(lang);
  };

  return (
    <PreferencesCtx.Provider value={{ language, changeLanguage }}>
      {children}
    </PreferencesCtx.Provider>
  );
};

export default PreferencesCtxProvider;
