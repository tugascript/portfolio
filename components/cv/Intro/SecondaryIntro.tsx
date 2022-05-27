import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IText } from "../../../interfaces/text";
import { PreferencesCtx } from "../../PreferencesContext";

const textArr: IText[] = [
  {
    en: "Not enough info?",
    pt: "Informação insuficiente?",
  },
  {
    en: "I am an Economics graduate from Portugal with a passion for programming. After learning the basics of programming in university, I taught myself Python Data Science and GraphQL back-end programming with TypeScript and Rust.",
    pt: "Sou um Português graduado em Economia com uma paixão por programação. Depois de aprender os básicos de programação na universidade, ensinei-me a mim mesmo Python Científico e a programar back-ends de GraphQL em TypeScript e Rust.",
  },
];

const SecondaryIntro: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);

  return (
    <Grid item xs={12}>
      <Typography variant="h5" paragraph>
        {textArr[0][language]}
      </Typography>
      <Typography variant="body1" paragraph>
        {textArr[1][language]}
      </Typography>
    </Grid>
  );
};

export default SecondaryIntro;
