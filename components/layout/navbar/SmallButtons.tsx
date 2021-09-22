import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import React from "react";
import { navbarClasses } from "../Navbar";
import MenuDrawer from "./MenuDrawer";

const SmallButtons: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <IconButton className={navbarClasses.ICON_BTN} onClick={handleClick}>
        {open ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <MenuDrawer open={open} handleOpen={handleClick} />
    </React.Fragment>
  );
};

export default SmallButtons;
