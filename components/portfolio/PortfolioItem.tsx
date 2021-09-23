import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { useContext } from "react";
import { IText } from "../../interfaces/text";
import type { IResponsiveImageProps } from "../layout/ResponsiveImage";
import ResponsiveImage from "../layout/ResponsiveImage";
import { PreferencesCtx } from "../PreferencesContext";

export interface ILink {
  name: IText;
  link: string;
}

interface IProps {
  title: IText;
  image: IResponsiveImageProps;
  status: IText;
  stack?: string;
  links: ILink[];
}

enum ClassesEnum {
  ROOT = "portfolio-item-root",
  TITLE = "portfolio-item-title",
  IMAGE = "portfolio-item-image",
  TEXT_AREA = "portfolio-item-text-area",
  LINK = "portfolio-item-link",
}

const ItemCard = styled(Card)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    color: "#fff",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  [`& .${ClassesEnum.TEXT_AREA}`]: {
    padding: "0.5em 1em",
    [theme.breakpoints.down("sm")]: {
      padding: "0.5em 0.25em",
    },
  },
  [`& .${ClassesEnum.LINK}`]: {
    color: theme.palette.background.default,
    textDecoration: "underline",
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
  },
}));

const textArr: IText[] = [
  { en: "Status", pt: "Status" },
  { en: "Tech-stack", pt: "Tecnologias" },
  { en: "Source Code", pt: "Código Fonte" },
];

const PortfolioItem: FC<IProps> = ({ title, image, links, stack, status }) => {
  const { language } = useContext(PreferencesCtx);

  return (
    <Grid item sm={11} xs={12} md={6} lg={4}>
      <ItemCard color="secondary" className={ClassesEnum.ROOT}>
        <CardMedia>
          <ResponsiveImage {...image} />
        </CardMedia>
        <CardContent className={ClassesEnum.TEXT_AREA}>
          <Typography variant="h6" gutterBottom>
            {title[language]}
          </Typography>
          <Grid
            container
            direction="column"
            spacing={1}
            justifyContent="center"
          >
            <Grid item container>
              <Grid item xs={4}>
                <Typography>{textArr[0][language]}:</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body2">{status[language]}</Typography>
              </Grid>
            </Grid>
            {stack && (
              <Grid item container>
                <Grid item xs={4}>
                  <Typography>{textArr[1][language]}:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2">{stack}</Typography>
                </Grid>
              </Grid>
            )}
            <Grid item container>
              <Grid item xs={4}>
                <Typography>{textArr[2][language]}:</Typography>
              </Grid>
              <Grid item xs={8}>
                {links.map(({ name, link }, i) => (
                  <Typography key={i} variant="body2">
                    <a
                      className={ClassesEnum.LINK}
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {name[language]}
                    </a>
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </ItemCard>
    </Grid>
  );
};

export type { IProps as IPortfolioItemProps };
export default PortfolioItem;
