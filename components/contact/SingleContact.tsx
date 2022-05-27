import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import React from "react";

interface IProps {
  icon: React.ComponentType<SvgIconProps>;
  text: string;
  link: string;
}

enum ClassesEnum {
  ROOT = "single-contact-root",
  ICON = "single-contact-icon",
  TEXT = "single-contact-text",
}

const ContactGrid = styled(Grid)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    margin: "0.15em 0",
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  [`& .${ClassesEnum.ICON}`]: {
    fontSize: "2rem",
    marginLeft: "0.5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      marginLeft: "0.3em",
    },
  },
  [`& .${ClassesEnum.TEXT}`]: {
    paddingBottom: "0.4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.85rem",
    },
  },
}));

const SingleContact: React.FC<IProps> = ({ icon: Icon, text, link }) => (
  <ContactGrid
    className={ClassesEnum.ROOT}
    container
    item
    sm={11}
    xs={12}
    alignItems="center"
    component="a"
    href={link}
    target="_blank"
  >
    <Grid item xs={2}>
      <Icon className={ClassesEnum.ICON} />
    </Grid>
    <Grid item xs={10}>
      <Typography className={ClassesEnum.TEXT}>{text}</Typography>
    </Grid>
  </ContactGrid>
);

export type { IProps as ISingleContactProps };
export default SingleContact;
