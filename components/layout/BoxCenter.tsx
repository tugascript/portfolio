import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import type { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const BoxCenterDiv = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "calc(100vh - 9em)",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "auto",
  [theme.breakpoints.down("sm")]: {
    minHeight: "calc(100vh - 112px)",
  },
}));

const BoxCenter: FC<IProps> = ({ children }) => (
  <BoxCenterDiv>
    <Grid container alignItems="center" justifyContent="center">
      <Grid item lg={6} md={8} sm={10} xs={12}>
        {children}
      </Grid>
    </Grid>
  </BoxCenterDiv>
);

export default BoxCenter;
