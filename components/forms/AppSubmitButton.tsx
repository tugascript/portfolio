import type { GridSize } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";

interface IProps {
  text: string;
  loading: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  variant?: "text" | "outlined" | "contained";
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const StyledBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:disabled": {
    color: "#fff",
    backgroundColor: theme.palette.primary.light,
  },
}));

const AppSubmitButton: React.FC<IProps> = ({
  text,
  variant = "contained",
  color = "secondary",
  loading,
  ...rest
}) => (
  <Grid item {...rest}>
    <StyledBtn
      fullWidth
      disableElevation
      disabled={loading}
      variant={variant}
      color={color}
      size="large"
      type="submit"
    >
      {text}
    </StyledBtn>
  </Grid>
);

export type { IProps as IAppSubmitButtonProps };
export default AppSubmitButton;
