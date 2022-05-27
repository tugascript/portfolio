import { Tab, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import React from "react";
import { ILanguage } from "../../../interfaces/language";
import { IText } from "../../../interfaces/text";
import ApolloIcon from "../../icons/ApolloIcon";
import DartIcon from "../../icons/DartIcon";
import MatplotlibIcon from "../../icons/MatplotlibIcon";
import MercuriusIcon from "../../icons/MercuriusIcon";
import NestjsIcon from "../../icons/NestjsIcon";
import PandasIcon from "../../icons/PandasIcon";
import PythonIcon from "../../icons/PythonIcon";
import RustIcon from "../../icons/RustIcon";
import StatsmodelsIcon from "../../icons/StatsmodelsIcon";
import TypeScriptIcon from "../../icons/TypeScriptIcon";
import TabContext from "@mui/lab/TabContext";
import { PreferencesCtx } from "../../PreferencesContext";
import Tabs from "@mui/material/Tabs";
import Frameworks from "./Frameworks";
import TokioIcon from "../../icons/TokioIcon";
import ActixIcon from "../../icons/ActixIcon";
import GraphQLIcon from "../../icons/GraphQLIcon";
import FlutterIcon from "../../icons/FlutterIcon";

const LanguagePaper = styled(Paper)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginTop: "2.5em",
  padding: "1em",
  borderRadius: "1em",
  [theme.breakpoints.down("sm")]: {
    padding: "0.75em",
  },
}));

const text: IText = {
  pt: "O Meu Conhecimento Tech!",
  en: "My Tech Tool Belt!",
};

const langs: ILanguage[] = [
  {
    name: "Python",
    Icon: PythonIcon,
    frameworks: [
      {
        name: "Pandas",
        Icon: PandasIcon,
        description: {
          pt: "Ferramenta de analise de dados.",
          en: "Data analyses tool",
        },
      },
      {
        name: "Matplotlib",
        Icon: MatplotlibIcon,
        description: {
          pt: "Ferramenta de visualização de dados.",
          en: "Data visualization tool.",
        },
      },
      {
        name: "Statsmodels",
        Icon: StatsmodelsIcon,
        description: {
          pt: "Ferramenta para modelagem estatistica.",
          en: "Statistical modeling tool.",
        },
      },
    ],
  },
  {
    name: "TypeScript",
    Icon: TypeScriptIcon,
    frameworks: [
      {
        name: "NestJS",
        Icon: NestjsIcon,
        description: {
          pt: "Framework para desenvolvimento de back-end.",
          en: "Back-end framework.",
        },
      },
      {
        name: "Apollo Server",
        Icon: ApolloIcon,
        description: {
          pt: "Servidor de GraphQL para ExpressJS.",
          en: "GraphQL server for ExpressJS.",
        },
      },
      {
        name: "Mercurius",
        Icon: MercuriusIcon,
        description: {
          pt: "Servidor de GraphQL para Fastify.",
          en: "GraphQL server for Fastify.",
        },
      },
    ],
  },
  {
    name: "Rust",
    Icon: RustIcon,
    frameworks: [
      {
        name: "Tokio",
        Icon: TokioIcon,
        description: {
          pt: "Runtime assíncrono",
          en: "Asynchronous Runtime",
        },
      },
      {
        name: "Actix-Web",
        Icon: ActixIcon,
        description: {
          pt: "Framework para desenvolvimento de back-end.",
          en: "Back-end framework.",
        },
      },
      {
        name: "Async-GraphQL",
        Icon: GraphQLIcon,
        description: {
          pt: "Servidor de GraphQL para Rust.",
          en: "Rust GraphQL server adapter.",
        },
      },
    ],
  },
  {
    name: "Dart",
    Icon: DartIcon,
    frameworks: [
      {
        name: "Flutter",
        Icon: FlutterIcon,
        description: {
          pt: "Framework para desenvolvimento de front-end para multi-plataformas",
          en: "Multiple-platforms front-end framework",
        },
      },
    ],
  },
];

const Languages: React.FC = () => {
  const [index, setIndex] = React.useState<string>("0");
  const { language } = React.useContext(PreferencesCtx);

  const changeIndex = (event: React.SyntheticEvent, i: string) => {
    if (parseInt(index, 10) < langs.length) setIndex(i);
  };

  return (
    <Grid
      container
      alignContent="center"
      justifyContent="center"
      sx={{ marginBottom: "1.25em" }}
    >
      <Grid item xl={9} lg={9} md={10} sm={11} xs={11}>
        <LanguagePaper>
          <Grid container alignContent="center" justifyContent="center">
            <Grid item xs={11}>
              <Typography variant="h5" gutterBottom>
                {text[language]}
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <TabContext value={index.toString()}>
                <Box
                  sx={{
                    width: "100%",
                    typography: "body1",
                    color: "white",
                  }}
                >
                  <Tabs onChange={changeIndex}>
                    {langs.map(({ Icon, name }, i) => (
                      <Tab
                        key={i}
                        value={i.toString()}
                        label={name}
                        sx={{
                          color: "primary.contrastText",
                          borderBottom:
                            index === i.toString() ? "0.15em solid" : "none",
                        }}
                        icon={<Icon size="large" />}
                        iconPosition="start"
                      />
                    ))}
                  </Tabs>
                </Box>
                {langs.map((l, i) => (
                  <Frameworks
                    key={`frameworks-${i}`}
                    index={i}
                    frameworks={l.frameworks}
                  />
                ))}
              </TabContext>
            </Grid>
          </Grid>
        </LanguagePaper>
      </Grid>
    </Grid>
  );
};

export default Languages;
