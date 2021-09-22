import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { useContext } from "react";
import type { IText } from "../../interfaces/text";
import { PreferencesCtx } from "../PreferencesContext";
import ContactForm from "./ContactForm";
import type { ISingleContactProps } from "./SingleContact";
import SingleContact from "./SingleContact";

const contactVals: ISingleContactProps[] = [
  { icon: CallIcon, text: "(+351) 926 337 040" },
  { icon: EmailIcon, text: "barracha.afonso@gmail.com" },
  { icon: LinkedInIcon, text: "afonso-barracha" },
  { icon: GitHubIcon, text: "tugascript" },
];

enum ClassesEnum {
  ROOT = "contact-card-root",
  CONTACTS = "contact-card-contacts",
}

const ContactsCard = styled(Card)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    marginTop: "1em",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 0,
    },
  },
  [`& .${ClassesEnum.CONTACTS}`]: {
    [theme.breakpoints.down("sm")]: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingBottom: "0.5em",
      marginBottom: "0.5em",
    },
  },
}));

const text: IText = {
  en: "Contact me",
  pt: "Contacte-me",
};

const ContactCard: FC = () => {
  const { language } = useContext(PreferencesCtx);

  return (
    <ContactsCard className={ClassesEnum.ROOT} elevation={0}>
      <CardContent component={Grid} container justifyContent="space-around">
        <Grid item xs={12}>
          <Typography color="#fff" variant="h4" align="center" gutterBottom>
            {text[language]}
          </Typography>
        </Grid>
        <Grid
          className={ClassesEnum.CONTACTS}
          item
          container
          sm={6}
          xs={12}
          justifyContent="center"
        >
          {contactVals.map((props, i) => (
            <SingleContact {...props} key={i} />
          ))}
        </Grid>
        <Grid item container sm={6} xs={12} justifyContent="center">
          <ContactForm />
        </Grid>
      </CardContent>
    </ContactsCard>
  );
};

export default ContactCard;
