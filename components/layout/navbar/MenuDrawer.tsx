import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import NodeJsIcon from "../../icons/NodeJsIcon";
import PortugalIcon from "../../icons/PortugalIcon";
import PythonIcon from "../../icons/PythonIcon";
import UkIcon from "../../icons/UkIcon";
import { PreferencesCtx } from "../../PreferencesContext";
import { navbarTextArr } from "../Navbar";
import LanguageCollapse from "./LanguageCollapse";
import { INavMenuState, navMenuTextArr } from "./NavMenu";
import ThemeCollapse from "./ThemeCollapse";

interface IProps {
  open: boolean;
  handleOpen: () => void;
}

enum ClassesEnum {
  ROOT = "menu-drawer-root",
  ITEM = "menu-drawer-item",
  ITEM_ICON = "menu-drawer-item-icon",
  SUB_ITEM = "menu-drawer-sub-item",
  ITEM_ACTIVE = "menu-drawer-item-active",
  ACTION_BTN = "menu-drawer-action-btn",
}

const DrawerList = styled(List)(({ theme }) => ({
  [`&.${ClassesEnum.ROOT}`]: {
    paddingTop: 56,
    color: "#fff",
    minWidth: "10em",
  },
  [`& .${ClassesEnum.ITEM}`]: {
    paddingBottom: "0.25em",
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.grey[300],
    },
  },
  [`& .${ClassesEnum.ITEM_ICON}`]: {
    color: "inherit",
  },
  [`& .${ClassesEnum.SUB_ITEM}`]: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      cursor: "pointer",
    },
  },
  [`& .${ClassesEnum.ITEM_ACTIVE}`]: {
    borderBottom: "3px solid #fff",
  },
  [`& .${ClassesEnum.ACTION_BTN}`]: {
    borderRadius: 30,
    color: theme.palette.primary.main,
  },
}));

const defaultState: INavMenuState = {
  themeOpen: false,
  languageOpen: false,
};

const MenuDrawer: React.FC<IProps> = ({ open, handleOpen }) => {
  const router = useRouter();
  const { language, theme } = React.useContext(PreferencesCtx);
  const [{ themeOpen, languageOpen }, setState] =
    React.useState<INavMenuState>(defaultState);

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
    <SwipeableDrawer
      anchor="right"
      open={open}
      onOpen={handleOpen}
      onClose={handleOpen}
    >
      <DrawerList className={ClassesEnum.ROOT}>
        <ListItem
          button
          className={`${ClassesEnum.ITEM} ${
            router.asPath === "/" ? ClassesEnum.ITEM_ACTIVE : null
          }`}
        >
          <ListItemIcon className={ClassesEnum.ITEM_ICON}>
            <CreateOutlinedIcon color="inherit" />
          </ListItemIcon>
          CV
        </ListItem>
        <ListItem button className={ClassesEnum.ITEM}>
          <ListItemIcon className={ClassesEnum.ITEM_ICON}>
            <DescriptionOutlinedIcon color="inherit" />
          </ListItemIcon>
          {navbarTextArr[0][language]}
        </ListItem>
        <ListItem button className={ClassesEnum.ITEM} onClick={handleLanguage}>
          <ListItemIcon>
            {language === "en" ? (
              <UkIcon fontSize="small" />
            ) : (
              <PortugalIcon fontSize="small" />
            )}
          </ListItemIcon>
          {navMenuTextArr[0][language]}
          <Typography variant="body2">
            {languageOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Typography>
        </ListItem>
        <LanguageCollapse
          open={languageOpen}
          className={ClassesEnum.SUB_ITEM}
          item={ListItem}
          onClose={handleClose}
        />
        <ListItem button className={ClassesEnum.ITEM} onClick={handleTheme}>
          <ListItemIcon>
            {theme === "python" ? (
              <PythonIcon fontSize="small" />
            ) : (
              <NodeJsIcon fontSize="small" />
            )}
          </ListItemIcon>
          {navMenuTextArr[1][language]}
          <Typography variant="body2">
            {themeOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Typography>
        </ListItem>
        <ThemeCollapse
          open={themeOpen}
          className={ClassesEnum.SUB_ITEM}
          item={ListItem}
          onClose={handleClose}
        />
        <ListItem>
          <Button
            className={ClassesEnum.ACTION_BTN}
            variant="contained"
            color="secondary"
            disableElevation
            fullWidth
          >
            {navbarTextArr[1][language]}
          </Button>
        </ListItem>
      </DrawerList>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
