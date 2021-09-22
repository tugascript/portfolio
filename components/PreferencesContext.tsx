import React from "react";

export type languageEnum = "pt" | "en";
export type themeEnum = "python" | "nodejs";

export interface IPreferencesState {
  language: languageEnum;
  theme: themeEnum;
}

interface IPreferencesCtx extends IPreferencesState {
  changeLanguage: (language: languageEnum) => void;
  changeTheme: (theme: themeEnum) => void;
}

interface IProps {
  children: React.ReactNode;
}

export const PreferencesCtx = React.createContext(
  {}
) as any as React.Context<IPreferencesCtx>;

const PreferencesCtxProvider: React.FC<IProps> = ({ children }) => {
  const [preferences, setPreferences] = React.useState<IPreferencesState>({
    language: "en",
    theme: "nodejs",
  });

  const changeLanguage = (language: languageEnum): void => {
    setPreferences(({ theme }) => ({ theme, language }));
  };

  const changeTheme = (theme: themeEnum): void => {
    setPreferences(({ language }) => ({ theme, language }));
  };

  return (
    <PreferencesCtx.Provider
      value={{ ...preferences, changeLanguage, changeTheme }}
    >
      {children}
    </PreferencesCtx.Provider>
  );
};

export default PreferencesCtxProvider;
