import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import type { Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
import type { IText } from "../../../interfaces/text";
import MainIcon from "../../icons/MainIcon";
import MainButtons from "./MainButtons";
import SmallButtons from "./SmallButtons";

interface IProps {
  children: React.ReactElement;
}

enum ClassesEnum {
  ROOT = "nav-appbar-root",
  ICON = "nav-appbar-icon",
  TEXT_BTN = "nav-appbar-text-btn",
  BTN_ACTIVE = "nav-appbar-btn-active",
  BTN_BORDER = "nav-appbar-action-div-border",
  ACTION_BTN = "nav-appbar-action-btn",
  ACTION_DIV = "nav-appbar-action-div",
  ICON_BTN = "nav-appbar-icon-btn",
}

const NavbarAppbar = styled(AppBar)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    zIndex: theme.zIndex.drawer + 1,
  },
  [`& .${ClassesEnum.ICON}`]: {
    stroke: "#fff",
    fill: "none",
    fontSize: "3rem",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  [`& .${ClassesEnum.TEXT_BTN}`]: {
    color: "#fff",
    height: "4.2em",
    borderRadius: 0,
    "&:hover": {
      color: theme.palette.grey[300],
    },
  },
  [`& .${ClassesEnum.BTN_ACTIVE}`]: {
    borderBottom: "3px solid #fff",
  },
  [`& .${ClassesEnum.ACTION_BTN}`]: {
    borderRadius: 30,
    color: theme.palette.primary.main,
    marginRight: 5,
  },
  [`& .${ClassesEnum.ACTION_DIV}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "4em",
  },
  [`& .${ClassesEnum.BTN_BORDER}`]: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
  },
  [`& .${ClassesEnum.ICON_BTN}`]: {
    color: "#fff",
  },
}));

const ElevationScroll: React.FC<IProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const textArr: IText[] = [
  { en: "Portfolio", pt: "Portefolio" },
  { en: "Contact me", pt: "Contacte-me" },
];

const Navbar: React.FC = () => {
  const matchesXS = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll>
        <NavbarAppbar className={ClassesEnum.ROOT}>
          <Toolbar>
            <MainIcon className={ClassesEnum.ICON} />
            {matchesXS ? <SmallButtons /> : <MainButtons />}
          </Toolbar>
        </NavbarAppbar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export { ClassesEnum as navbarClasses, textArr as navbarTextArr };
export default Navbar;
