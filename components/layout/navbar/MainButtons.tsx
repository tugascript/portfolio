import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { PreferencesCtx } from "../../PreferencesContext";
import { navbarClasses, navbarTextArr } from "../Navbar";
import NavMenu from "./NavMenu";

const MainButtons: React.FC = () => {
  const router = useRouter();
  const { language } = React.useContext(PreferencesCtx);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button
        className={clsx(navbarClasses.TEXT_BTN, {
          [navbarClasses.BTN_ACTIVE]: router.asPath === "/",
          [navbarClasses.BTN_BORDER]: router.asPath !== "/",
        })}
        size="large"
        onClick={() => router.push("/")}
        disableRipple
      >
        CV
      </Button>
      <Button
        className={clsx(navbarClasses.TEXT_BTN, {
          [navbarClasses.BTN_ACTIVE]: router.asPath === "/portfolio",
          [navbarClasses.BTN_BORDER]: router.asPath !== "/portfolio",
        })}
        size="large"
        disableRipple
        onClick={() => router.push("/portfolio")}
      >
        {navbarTextArr[0][language]}
      </Button>
      <div
        className={clsx(navbarClasses.ACTION_DIV, {
          [navbarClasses.BTN_ACTIVE]: router.asPath === "/contacts",
          [navbarClasses.BTN_BORDER]: router.asPath !== "/contacts",
        })}
      >
        <Button
          className={navbarClasses.ACTION_BTN}
          variant="contained"
          color="secondary"
          disableElevation
          onClick={() => router.push("/contacts")}
          size="large"
        >
          {navbarTextArr[1][language]}
        </Button>
      </div>
      <IconButton className={navbarClasses.ICON_BTN} onClick={handleClick}>
        {open ? <CloseIcon /> : <ArrowDropDownIcon />}
      </IconButton>
      <NavMenu anchorEl={anchorEl} open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default MainButtons;
