import type { GridSize } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";

interface IProps {
  text: string;
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

const AppSubmitButton: React.FC<IProps> = ({
  text,
  variant = "contained",
  color = "secondary",
  ...rest
}) => (
  <Grid item {...rest}>
    <Button
      fullWidth
      disableElevation
      variant={variant}
      color={color}
      size="large"
      type="submit"
      sx={{ color: (theme) => theme.palette.primary.main }}
    >
      {text}
    </Button>
  </Grid>
);

export type { IProps as IAppSubmitButtonProps };
export default AppSubmitButton;
