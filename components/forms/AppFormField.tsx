import type { GridSize, InputProps } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useField } from "formik";
import React from "react";

const CssTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#fff",
  },
  "&:hover label": {
    color: theme.palette.grey[400],
  },
  "& label.Mui-focused": {
    color: theme.palette.background.default,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.background.default,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
      color: "#fff",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.background.default,
    },
  },
}));

interface IProps {
  name: string;
  label: string;
  loading: boolean;
  type?: string;
  className?: string;
  labelClassName?: string;
  variant?: "filled" | "standard" | "outlined";
  color?: "primary" | "secondary";
  size?: "medium" | "small";
  multiline?: boolean;
  rows?: number;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  startAdornment?: React.ReactElement;
  endAdornment?: React.ReactElement;
  shrink?: boolean;
  required?: boolean;
  disableUnderline?: boolean;
}

const AppFormField: React.FC<IProps> = ({
  name,
  label,
  loading,
  type,
  className,
  labelClassName,
  color = "secondary",
  size = "medium",
  variant = "outlined",
  multiline = false,
  rows,
  xs,
  sm,
  md,
  lg,
  xl,
  startAdornment,
  endAdornment,
  shrink,
  required,
  disableUnderline = false,
}) => {
  const [field, meta, helpers] = useField<unknown>(name);
  const hasErrors = Boolean(meta.error && meta.touched);

  const inputProps: InputProps = {
    className,
    startAdornment,
    endAdornment,
    disableUnderline: disableUnderline,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
  };
  const handleBlur = () => {
    helpers.setTouched(true, true);
  };

  return (
    <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      <CssTextField
        label={label}
        color={color}
        size={size}
        // @ts-ignore
        variant={variant}
        required={required}
        type={type}
        fullWidth
        id={`${name}-${label}`}
        value={field.value}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={loading}
        multiline={multiline ?? false}
        rows={rows}
        error={hasErrors}
        helperText={hasErrors ? meta.error : null}
        InputProps={inputProps}
        InputLabelProps={{
          className: labelClassName,
          shrink,
        }}
      />
    </Grid>
  );
};

export type { IProps as IAppFormFieldProps };
export default AppFormField;
