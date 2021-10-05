import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React from "react";

enum ClassesEnum {
  EMPTY = "foot-bar-empty",
  FOOTER = "foot-bar-footer",
  TEXT = "foot-bar-text",
}

const FootbarDiv = styled("div")(({ theme }) => ({
  [`& .${ClassesEnum.EMPTY}`]: {
    marginTop: "1em",
  },
  [`& .${ClassesEnum.FOOTER}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.divider,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  [`& .${ClassesEnum.TEXT}`]: {
    margin: "0 auto",
  },
}));

const Footbar: React.FC = () => (
  <FootbarDiv>
    <Toolbar className={ClassesEnum.EMPTY} />
    <Toolbar component="footer" className={ClassesEnum.FOOTER}>
      <Typography variant="subtitle1" className={ClassesEnum.TEXT}>
        &#169; {new Date().getFullYear()}, Afonso Barracha
      </Typography>
    </Toolbar>
  </FootbarDiv>
);

export default Footbar;
