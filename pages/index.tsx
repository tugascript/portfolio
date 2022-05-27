import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Intro from "../components/cv/Intro";
import Languages from "../components/cv/Languages";

const Home: NextPage = () => (
  <Fragment>
    <Head>
      <title>TugaScript | CV</title>
    </Head>
    <Grid container direction="column">
      <Intro />
      <Languages />
    </Grid>
  </Fragment>
);

export default Home;
