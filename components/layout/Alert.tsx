import type { AlertProps } from "@mui/material/Alert";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import type { FC, SyntheticEvent } from "react";
import { forwardRef } from "react";

interface IProps {
  severity: "success" | "error";
  message: string;
  open: boolean;
  handleClose: (e: SyntheticEvent, reason?: string) => void;
}

const InnerAlert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Alert: FC<IProps> = ({ severity, message, open, handleClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    open={open}
    autoHideDuration={5000}
    onClose={handleClose}
  >
    <InnerAlert
      onClose={handleClose}
      severity={severity}
      sx={{ width: "100%" }}
    >
      {message}
    </InnerAlert>
  </Snackbar>
);

export default Alert;
