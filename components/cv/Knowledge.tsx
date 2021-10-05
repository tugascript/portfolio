import Grid from "@mui/material/Grid";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import React from "react";
import type { IText } from "../../interfaces/text";
import PostgreSQLIcon from "../icons/PostgreSQLIcon";
import PythonIcon from "../icons/PythonIcon";
import RustIcon from "../icons/RustIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import { PreferencesCtx } from "../PreferencesContext";
import LanguageLevel from "./LanguageLevel";

const text: IText = {
  en: "What languages do I know and their uses?",
  pt: "Que linguagens conheço e os seus usos?",
};

interface ILang {
  name: string;
  icon: React.ComponentType<SvgIconProps>;
  level: number;
  uses: IText[];
}

const languages: ILang[] = [
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    level: 100,
    uses: [
      { en: "Backend", pt: "Servidor" },
      { en: "Frontend", pt: "Interface" },
      { en: "Mobile", pt: "Telemóvel" },
    ],
  },
  {
    name: "Python",
    icon: PythonIcon,
    level: 80,
    uses: [
      { en: "Backend", pt: "Servidor" },
      { en: "Data Analysis", pt: "Analise de Dados" },
      { en: "Machine Learning", pt: "Inteligência Artificial" },
    ],
  },
  {
    name: "SQL",
    icon: PostgreSQLIcon,
    level: 60,
    uses: [
      { en: "Data Storage", pt: "Armanezamento de Dados" },
      { en: "Data Analysis", pt: "Analise de Dados" },
    ],
  },
  {
    name: "Rust",
    icon: RustIcon,
    level: 40,
    uses: [
      { en: "Low-level programming", pt: "Programação de baixo nível" },
      { en: "Backend", pt: "Servidor" },
      { en: "Blockchain", pt: "Blockchain" },
    ],
  },
];

const Knowledge: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);
  return (
    <Grid style={{ marginTop: "1em" }} item container justifyContent="center">
      <Grid item xs={11}>
        <Typography variant="h4" gutterBottom>
          {text[language]}
        </Typography>
      </Grid>
      <Grid item container xs={11} spacing={1}>
        {languages.map((p, i) => (
          <LanguageLevel key={i} {...p} language={language} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Knowledge;
