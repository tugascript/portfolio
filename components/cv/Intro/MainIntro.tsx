import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { IText } from "../../../interfaces/text";
import { PreferencesCtx } from "../../PreferencesContext";
import clsx from "clsx";

const text: IText[] = [
  { en: "Hey there, my name is", pt: "Boas, eu chamo-me" },
  {
    en: "I'm a Python Econometrics Analyst and TypeScript & GraphQL Developer",
    pt: "Faço analizes econometricas em Python e desenvolvimento em TypeScript e GraphQL",
  },
];

enum ClassesEnum {
  ROOT = "short-intro-root",
  INTRO_TEXT = "short-intro-text",
  HIRE_BTN = "short-intro-hire-btn",
  NAME_TEXT = "short-intro-name-text",
}

const MainIntroGrid = styled(Grid)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    padding: "1em 0",
  },
  [`& .${ClassesEnum.INTRO_TEXT}`]: {
    textTransform: "uppercase",
  },
  [`& .${ClassesEnum.NAME_TEXT}`]: {
    fontSize: "2rem",
  },
  [`& .${ClassesEnum.HIRE_BTN}`]: {
    color: theme.palette.background.default,
  },
}));

const MainIntro: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);
  return (
    <MainIntroGrid
      item
      container
      justifyContent="center"
      className={ClassesEnum.ROOT}
      xs={12}
    >
      <Grid item xs={11}>
        <Typography
          variant="h6"
          className={ClassesEnum.INTRO_TEXT}
          align="center"
        >
          {text[0][language]}
        </Typography>
        <Typography
          variant="h4"
          className={clsx(ClassesEnum.INTRO_TEXT, ClassesEnum.NAME_TEXT)}
          align="center"
        >
          Afonso Barracha
        </Typography>
        <Typography align="center" gutterBottom>
          {text[1][language]}
        </Typography>
      </Grid>
    </MainIntroGrid>
  );
};

export default MainIntro;
