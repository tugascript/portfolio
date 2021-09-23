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
    en: "I started my coding journey on my 1st year of electrical engineering at College. I ended up changing majors to Economics, the bachelor I completed with a good average (B of 75%) in Universidade da Beira Interior (UBI). Meanwhile, between the change, I have learnt JavaScript with the FreeCodeCamp community in Lisbon, where my passion for coding emerged.",
    pt: "No 1º ano da universidade em Engenharia Electrotécnica, dei os meus primeiros passos na programação. Acabei por mudar de cursos porque descobri que gostaria de trabalhar mais com Economia, a licenciatura que acabei com 15 valores na Universidade da Beira Interior (UBI). Entre a mudança dos cursos aprendi JavaScript com a comunidade do FreeCodeCamp de Lisboa, onde tomei o gosto por programação.",
  },
  {
    en: "Presently, my goal is to become a Data Scientist specialized in Healthcare Economics, since my passions are health and fitness. To achieve this goal I have learnt web development with Django and DRF, and I am continuously learning scientific python with Pandas, MatplotLib, SkitLearn and TensorFlow.",
    pt: "Neste momento, o meu objectivo é trabalhar como Analista de Dados especializado em Economia da Saúde, visto que as minhas paixões são saúde e fitness.  Para concretizar este sonho aprendi desenvolvimento web com Django e DRF, e continuo a adquirir conhecimento em Python científico com Pandas, MatplotLib, SkitLearn e TensorFlow.",
  },
  {
    en: "Currently, the languages I am most comfortable with are TypeScript and Python. Recently I started learning Rust as well. As for frameworks, for Scientific Python I am continuously learning and improving, while for backend development apart from Django, I am very comfortable with NestJs.",
    pt: "Atualmente, as linguagens que estou à vontade são TypeScript e Python. Recentemente comecei a aprender Rust. No que respeita a frameworks, o meu conhecimento em Python científico é um trabalho contínuo. Para desenvolver backends também me sinto confortável com NestJs.",
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
            i > 0 && i < 4 ? (
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
                ? "https://drive.google.com/file/d/1aoJeI3VijQsGjAKpMCgWdJl_qJl7AuZX/view?usp=sharing"
                : "https://drive.google.com/file/d/1FmLd_mSB4Bx6uy7rLcItMxJdpz7huQL_/view?usp=sharing"
            }
            target="_blank"
          >
            {textArr[4][language]}
          </Button>
        </Grid>
      </Grid>
    </LongIntroGrid>
  );
};

export default LongIntro;
