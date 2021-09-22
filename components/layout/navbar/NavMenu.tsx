import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import type { IText } from "../../../interfaces/text";
import NodeJsIcon from "../../icons/NodeJsIcon";
import PortugalIcon from "../../icons/PortugalIcon";
import PythonIcon from "../../icons/PythonIcon";
import UkIcon from "../../icons/UkIcon";
import { PreferencesCtx } from "../../PreferencesContext";
import LanguageCollapse from "./LanguageCollapse";
import ThemeCollapse from "./ThemeCollapse";

interface IProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

interface IState {
  themeOpen: boolean;
  languageOpen: boolean;
}

const textArr: IText[] = [
  { en: "Language", pt: "Lingua" },
  { en: "Theme", pt: "Tema" },
];

enum ClassesEnum {
  ROOT = "nav-menu-root",
  ITEM = "nav-menu-item",
  SUB_ITEM = "nav-menu-sub-item",
}

const StyledMenu = styled(Menu)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    marginTop: "0.85em",
  },
  [`& .${ClassesEnum.ITEM}`]: {
    color: theme.palette.primary.contrastText,
  },
  [`& .${ClassesEnum.SUB_ITEM}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const defaultState: IState = {
  themeOpen: false,
  languageOpen: false,
};

const NavMenu: React.FC<IProps> = ({ anchorEl, open, onClose }) => {
  const [{ themeOpen, languageOpen }, setState] =
    React.useState<IState>(defaultState);
  const { theme, language } = React.useContext(PreferencesCtx);

  const handleTheme = () => {
    setState({ themeOpen: !themeOpen, languageOpen: false });
  };

  const handleLanguage = () => {
    setState({ themeOpen: false, languageOpen: !languageOpen });
  };

  const handleClose = () => {
    setState(defaultState);
  };

  return (
    <StyledMenu
      id="nav-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => {
        setState({ themeOpen: false, languageOpen: false });
        onClose();
      }}
      className={ClassesEnum.ROOT}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      disableScrollLock
      sx={{
        color: "#fff",
      }}
    >
      <MenuItem className={ClassesEnum.ITEM} onClick={handleLanguage}>
        <ListItemIcon>
          {language === "en" ? (
            <UkIcon fontSize="small" />
          ) : (
            <PortugalIcon fontSize="small" />
          )}
        </ListItemIcon>
        {textArr[0][language]}
        <Typography variant="body2">
          {languageOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </MenuItem>
      <LanguageCollapse
        open={languageOpen}
        className={ClassesEnum.SUB_ITEM}
        item={MenuItem}
        onClose={handleClose}
      />
      <MenuItem className={ClassesEnum.ITEM} onClick={handleTheme}>
        <ListItemIcon>
          {theme === "python" ? (
            <PythonIcon fontSize="small" />
          ) : (
            <NodeJsIcon fontSize="small" />
          )}
        </ListItemIcon>
        {textArr[1][language]}
        <Typography variant="body2">
          {themeOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </Typography>
      </MenuItem>
      <ThemeCollapse
        open={themeOpen}
        className={ClassesEnum.SUB_ITEM}
        item={MenuItem}
        onClose={handleClose}
      />
    </StyledMenu>
  );
};

export type { IState as INavMenuState };
export { textArr as navMenuTextArr };
export default NavMenu;
