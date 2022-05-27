import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { IText } from "../../interfaces/text";
import { PreferencesCtx } from "../PreferencesContext";

const text: IText[] = [
  { en: "Hey there, my name is", pt: "Boas, eu chamo-me" },
  {
    en: "I'm a Python Econometrics Analyst and TypeScript & GraphQL Developer",
    pt: "Faço analizes econometricas em Python e desenvolvimento em TypeScript e GraphQL",
  },
  { en: "Hire me!", pt: "Emprega-me!" },
  { en: "Just need a gig?", pt: "Só precisas dum servico?" },
];

enum ClassesEnum {
  ROOT = "short-intro-root",
  INTRO_TEXT = "short-intro-text",
  HIRE_BTN = "short-intro-hire-btn",
}

const ShortIntroGrid = styled(Grid)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    padding: "1em 0",
  },
  [`& .${ClassesEnum.INTRO_TEXT}`]: {
    textTransform: "uppercase",
  },
  [`& .${ClassesEnum.HIRE_BTN}`]: {
    color: theme.palette.background.default,
  },
}));

const ShortIntro: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);
  return (
    <ShortIntroGrid
      item
      container
      justifyContent="center"
      className={ClassesEnum.ROOT}
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
          className={ClassesEnum.INTRO_TEXT}
          align="center"
        >
          Afonso Barracha
        </Typography>
        <Typography align="center" gutterBottom>
          {text[1][language]}
        </Typography>
      </Grid>
    </ShortIntroGrid>
  );
};

export default ShortIntro;
