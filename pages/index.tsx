import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import Knowledge from "../components/cv/Knowledge";
import LongIntro from "../components/cv/LongIntro";
import ShortIntro from "../components/cv/ShortIntro";

const Home: NextPage = () => (
  <Fragment>
    <Head>
      <title>TugaScript | CV</title>
    </Head>
    <Grid container direction="column">
      <ShortIntro />
      <LongIntro />
      <Knowledge />
    </Grid>
  </Fragment>
);

export default Home;
