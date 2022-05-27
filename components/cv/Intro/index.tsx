import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import HomeImage from "./HomeImage";
import MainIntro from "./MainIntro";
import SecondaryIntro from "./SecondaryIntro";
import IntroButtons from "./IntroButtons";
import { blueGrey, grey } from "@mui/material/colors";

enum ClassesEnum {
  MAIN = "long-intro-main",
  OUTER_CONTAINER = "long-intro-outer-container",
  INNER_CONTAINER = "long-intro-inner-container",
}

const IntroGrid = styled(Grid)(({ theme }) => ({
  [`&.${ClassesEnum.MAIN}`]: {
    paddingTop: "0.25em",
    color: theme.palette.primary.contrastText,
    backgroundColor: grey["800"],
  },
  [`& .${ClassesEnum.OUTER_CONTAINER}`]: {
    padding: "2em",
    mixHeight: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.5em",
    },
  },
  [`& .${ClassesEnum.INNER_CONTAINER}`]: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "1em",
    padding: "1em",
  },
}));

const Intro: React.FC = () => (
  <IntroGrid item container alignItems="center" className={ClassesEnum.MAIN}>
    <Grid item container xl={3} lg={4} md={5} xs={12}>
      <HomeImage />
    </Grid>
    <Grid
      item
      container
      xl={9}
      lg={8}
      md={7}
      xs={12}
      className={ClassesEnum.OUTER_CONTAINER}
    >
      <div className={ClassesEnum.INNER_CONTAINER}>
        <MainIntro />
        <SecondaryIntro />
        <IntroButtons />
      </div>
    </Grid>
  </IntroGrid>
);

export default Intro;
