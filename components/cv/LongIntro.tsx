import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import type { IText } from "../../interfaces/text";
// @ts-ignore
import photo from "../../public/home-photo.JPG";
import ResponsiveImage from "../layout/ResponsiveImage";
import { PreferencesCtx } from "../PreferencesContext";

const textArr: IText[] = [
  {
    en: "Who am I?",
    pt: "Quem sou eu?",
  },
  {
    en: "My coding passion began on my 1st year of Electrical Engineering at college. As I changed to Economics, I studied at the University of Beira Interior and succeeded the Bachelor with a good grade (B of 75%). In the meantime I was learning JavaScript with the FreeCodeCamp community in Lisbon, where my interest for coding emerged.",
    pt: "No 1º ano da universidade em Engenharia Electrotécnica, dei os meus primeiros passos na programação. Entretanto, mudei de curso pois descobri que gostaria mais de Economia: a licenciatura que acabei com 15 valores - Universidade da Beira Interior (UBI). Ao mesmo tempo, aprendi JavaScript com a comunidade do FreeCodeCamp de Lisboa, onde me entusiasmei com a programação.",
  },
  {
    en: "Nowadays, I intend to be a Data Scientist and specialize in Healthcare Economics: Health and Fitness are my favourite practice. To help with this goal I also learnt Web Development with Django and DRF. Learning Scientific Python with Pandas, MatplotLib, SkitLearn and TensorFlow is on progress.",
    pt: "O meu objectivo é trabalhar como Analista de Dados especializado em Economia da Saúde, sendo as minhas paixões Saúde e Fitness.  Para atingir esta meta aprendi Web Development com Django e DRF. Continuo a adquirir conhecimento em Python científico com Pandas, MatplotLib, SkitLearn e TensorFlow.",
  },
  {
    en: "My main programming languages are TypeScript and Python. Recently, I am learning Rust as well.",
    pt: "As linguagens de programação em que estou à vontade são TypeScript e Python. Também comecei a aprender Rust.",
  },
  {
    en: "In terms of Frameworks, I am still learning and improving Scientific Python; while for Back-end development apart from Django, I am very comfortable with NestJS.",
    pt: "No que respeita a Frameworks, o meu conhecimento em Python científico é uma aprendizagem contínua; para desenvolver Back-ends, tirando Django, sinto-me confortável com NestJS.",
  },
  {
    en: "Download my CV",
    pt: "Sacar o meu CV",
  },
];

enum ClassesEnum {
  MAIN = "long-intro-main",
  CONTAINER = "long-intro-container",
  TITLE = "long-intro-title",
  TEXT = "long-intro-text",
  BTN = "long-intro-btn",
}

const LongIntroGrid = styled(Grid)(({ theme }) => ({
  [`&.${ClassesEnum.MAIN}`]: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.contrastText,
  },
  [`& .${ClassesEnum.CONTAINER}`]: {
    padding: "1em",
    mixHeight: "100%",
  },
  [`& .${ClassesEnum.TITLE}`]: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  [`& .${ClassesEnum.TEXT}`]: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  [`& .${ClassesEnum.BTN}`]: {
    borderColor: theme.palette.background.default,
    borderWidth: "0.15em",
    color: theme.palette.background.default,
    borderRadius: 50,
    "&:hover": {
      borderColor: theme.palette.background.default,
      borderWidth: "0.15em",
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.default,
    },
  },
}));

const LongIntro: React.FC = () => {
  const { language } = React.useContext(PreferencesCtx);

  return (
    <LongIntroGrid
      item
      container
      alignItems="center"
      className={ClassesEnum.MAIN}
    >
      <Grid item container lg={5} md={6} xs={12}>
        <ResponsiveImage src={photo} alt="afonso barracha photo" />
      </Grid>
      <Grid
        className={ClassesEnum.CONTAINER}
        spacing={2}
        container
        direction="column"
        item
        lg={7}
        md={6}
        xs={12}
      >
        <Grid item>
          <Typography className={ClassesEnum.TITLE} variant="h4" paragraph>
            {textArr[0][language]}
          </Typography>
          {textArr.map((line, i) =>
            i > 0 && i < 5 ? (
              <Typography
                key={`long-intro-${i}`}
                paragraph
                className={ClassesEnum.TEXT}
              >
                {line[language]}
              </Typography>
            ) : null
          )}
        </Grid>
        <Grid item>
          <Button
            className={ClassesEnum.BTN}
            variant="outlined"
            color="secondary"
            size="large"
            disableElevation
            fullWidth
            LinkComponent="a"
            rel="noreferrer"
            href={
              language === "en"
                ? "https://drive.google.com/file/d/1tT8C0AaLfutb1AsmdbzCovszK65T09IW/view?usp=sharing"
                : "https://drive.google.com/file/d/1FmLd_mSB4Bx6uy7rLcItMxJdpz7huQL_/view?usp=sharing"
            }
            target="_blank"
          >
            {textArr[5][language]}
          </Button>
        </Grid>
      </Grid>
    </LongIntroGrid>
  );
};

export default LongIntro;
