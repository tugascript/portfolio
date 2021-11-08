import Grid from "@mui/material/Grid";
import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import type { ISectionProps } from "../components/portfolio/Section";
import Section from "../components/portfolio/Section";

const portArr: ISectionProps[] = [
  {
    title: { en: "Web Development", pt: "Desenvolvimento Web" },
    subSections: [
      {
        subTitle: { en: "Full-stack", pt: "Interface e Servidor" },
        items: [
          {
            title: { en: "Blog", pt: "Blog" },
            image: { src: "/portfolio/blog-app.jpg", alt: "blog" },
            status: { en: "Ongoing", pt: "Em desenvolvimento" },
            stack: "NextJs, NestJs and GraphQL",
            links: [
              {
                name: { en: "Front-end", pt: "Interface" },
                link: "https://github.com/tugascript/blog-react",
              },
              {
                name: { en: "Back-end", pt: "Servidor" },
                link: "https://github.com/tugascript/nestjs-blog",
              },
            ],
          },
        ],
      },
      {
        subTitle: { en: "Front-end", pt: "Interface" },
        items: [
          {
            title: { en: "Portfolio", pt: "Portefolio" },
            image: { src: "/portfolio/portfolio.jpg", alt: "portfolio" },
            status: { en: "Ongoing", pt: "Em desenvolvimento" },
            stack: "NextJs",
            links: [
              {
                name: { en: "Front-end", pt: "Interface" },
                link: "https://github.com/tugascript/portfolio",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: { en: "Data Science", pt: "Ciência de Dados" },
    subSections: [
      {
        subTitle: { en: "Data Analysis", pt: "Análise de Dados" },
        items: [
          {
            title: {
              en: "Migration effects in income distribution",
              pt: "Efeitos da migração na distrubuição dos rendimentos",
            },
            image: { src: "/portfolio/migration.jpg", alt: "german flag" },
            status: { en: "Completed", pt: "Completo" },
            links: [
              {
                name: { en: "Google Collab", pt: "Google Collab" },
                link: "https://colab.research.google.com/drive/1Z8PnnhsDuLZB30Qom4s68rAv8OIt6FVa?usp=sharing",
              },
            ],
          },
          {
            title: {
              en: "Barracha (small firm) Income Analysis",
              pt: "Análise de Rendimentos da Barracha (micro empresa)",
            },
            image: { src: "/portfolio/barracha.jpg", alt: "barracha" },
            status: { en: "Sample", pt: "Exemplo" },
            links: [
              {
                name: { en: "Google Collab", pt: "Google Collab" },
                link: "https://colab.research.google.com/drive/12S2sz7J9XQeNhF6EOxb1NrFp0HqXiqob?usp=sharing",
              },
            ],
          },
        ],
      },
    ],
  },
];

const Portfolio: NextPage = () => (
  <Fragment>
    <Head>
      <title>TugaScript | Portfolio</title>
    </Head>
    <Grid container>
      {portArr.map((props, i) => (
        <Section {...props} key={i} />
      ))}
    </Grid>
  </Fragment>
);

export default Portfolio;
