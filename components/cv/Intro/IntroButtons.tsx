import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import { IText } from "../../../interfaces/text";
import { PreferencesCtx } from "../../PreferencesContext";
import { styled } from "@mui/material/styles";

const textArr: IText[] = [
  {
    en: "Hire Me",
    pt: "Emprega-me",
  },
  {
    en: "My CV",
    pt: "Meu CV",
  },
];

enum ClassesEnum {
  HIRE_BTN = "intro-hire-btn",
  CV_BTN = "intro-cv-btn",
}

const ButtonsGrid = styled(Grid)(({ theme }) => ({
  [`& .${ClassesEnum.HIRE_BTN}`]: {
    borderWidth: "0.25em",
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    ["&:hover"]: {
      borderWidth: "0.25em",
      backgroundColor: theme.palette.secondary.light,
      borderColor: theme.palette.secondary.light,
    },
  },
  [`& .${ClassesEnum.CV_BTN}`]: {
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    borderWidth: "0.25em",
    ["&:hover"]: {
      borderWidth: "0.25em",
      borderColor: theme.palette.secondary.light,
      color: theme.palette.secondary.light,
    },
  },
}));

const IntroButtons: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);

  return (
    <ButtonsGrid item xs={12} container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          className={ClassesEnum.HIRE_BTN}
          fullWidth
          LinkComponent="a"
          href="mailto: barracha.afonso@gmail.com"
        >
          {textArr[0][language]}
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          size="large"
          color="secondary"
          variant="outlined"
          disableElevation
          fullWidth
          className={ClassesEnum.CV_BTN}
          LinkComponent="a"
          href="/cv/cv_small.pdf"
          target="_blank"
        >
          {textArr[1][language]}
        </Button>
      </Grid>
    </ButtonsGrid>
  );
};

export default IntroButtons;
