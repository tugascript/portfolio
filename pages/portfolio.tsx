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
            stack: "NestJS, Mercurius & Mikro-ORM",
            links: [
              {
                name: { en: "Back-end", pt: "Servidor" },
                link: "https://github.com/tugascript/nestjs-blog",
              },
            ],
          },
          {
            title: { en: "Flutter Puzzle Hack", pt: "Flutter Puzzle Hack" },
            image: {
              src: "/portfolio/flutter-hack.jpg",
              alt: "flutter-puzzle-hack",
            },
            status: { en: "Completed", pt: "Completo" },
            stack: "Flutter, Dart, NestJS & Apollo",
            links: [
              {
                name: { en: "Front-end", pt: "Interface" },
                link: "https://github.com/tugascript/flutter-slider-2",
              },
              {
                name: { en: "Back-end", pt: "Servidor" },
                link: "https://github.com/tugascript/flutter-slider-backend",
              },
            ],
          },
        ],
      },
      {
        subTitle: { en: "Front-end", pt: "Interface" },
        items: [
          {
            title: { en: "Foto Editor", pt: "Editor de fotos" },
            image: { src: "/portfolio/editor.jpg", alt: "editor" },
            status: { en: "Completed", pt: "Completo" },
            stack: "NextJs",
            links: [
              {
                name: { en: "Front-end", pt: "Interface" },
                link: "https://github.com/tugascript/basic-image-editor",
              },
              {
                name: { en: "Web-site", pt: "Site Web" },
                link: "https://editor.tugascript.com/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: { en: "Data Science", pt: "Ci??ncia de Dados" },
    subSections: [
      {
        subTitle: { en: "Data Analysis", pt: "An??lise de Dados" },
        items: [
          {
            title: {
              en: "Migration effects in income distribution",
              pt: "Efeitos da migra????o na distrubui????o dos rendimentos",
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
              pt: "An??lise de Rendimentos da Barracha (micro empresa)",
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
