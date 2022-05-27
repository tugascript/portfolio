import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { IFramework } from "../../../../interfaces/framework";
import { PreferencesCtx } from "../../../PreferencesContext";

type IProps = IFramework;

const Framework: React.FC<IProps> = ({ Icon, name, description }) => {
  const { language } = React.useContext(PreferencesCtx);

  return (
    <Grid
      item
      container
      spacing={1}
      xs={12}
      sx={{ marginBottom: "0.75em" }}
      alignItems="center"
    >
      <Grid item xl={1} lg={1} md={2} sm={3} xs={3}>
        <Icon fontSize="large" />
      </Grid>
      <Grid item xl={11} lg={11} md={10} sm={9} xs={8}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1">{description[language]}</Typography>
      </Grid>
    </Grid>
  );
};

export default Framework;
