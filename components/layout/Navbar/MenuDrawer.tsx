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
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import PortugalIcon from "../../icons/PortugalIcon";
import UkIcon from "../../icons/UkIcon";
import { PreferencesCtx } from "../../PreferencesContext";
import { navbarTextArr } from "../Navbar";
import LanguageCollapse from "./LanguageCollapse";

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

const MenuDrawer: React.FC<IProps> = ({ open, handleOpen }) => {
  const router = useRouter();
  const { language } = React.useContext(PreferencesCtx);
  const [langOpen, setLangOpen] = React.useState<boolean>(false);

  const handleLanguage = () => {
    setLangOpen((prev) => !prev);
  };

  const handleClose = () => {
    setLangOpen(false);
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
          className={clsx(ClassesEnum.ITEM, {
            [ClassesEnum.ITEM_ACTIVE]: router.asPath === "/",
          })}
          onClick={() => {
            router.push("/");
            handleOpen();
          }}
        >
          <ListItemIcon className={ClassesEnum.ITEM_ICON}>
            <CreateOutlinedIcon color="inherit" />
          </ListItemIcon>
          CV
        </ListItem>
        <ListItem
          className={clsx(ClassesEnum.ITEM, {
            [ClassesEnum.ITEM_ACTIVE]: router.asPath === "/portfolio",
          })}
          onClick={() => {
            router.push("/portfolio");
            handleOpen();
          }}
        >
          <ListItemIcon className={ClassesEnum.ITEM_ICON}>
            <DescriptionOutlinedIcon color="inherit" />
          </ListItemIcon>
          {navbarTextArr[0][language]}
        </ListItem>
        <ListItem className={ClassesEnum.ITEM} onClick={handleLanguage}>
          <ListItemIcon>
            {language === "en" ? (
              <UkIcon fontSize="small" />
            ) : (
              <PortugalIcon fontSize="small" />
            )}
          </ListItemIcon>
          {language.toUpperCase()}
          <Typography variant="body2" align="right">
            {langOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Typography>
        </ListItem>
        <LanguageCollapse
          open={langOpen}
          className={ClassesEnum.SUB_ITEM}
          item={ListItem}
          onClose={handleClose}
        />
        <ListItem
          className={clsx(ClassesEnum.ITEM, {
            [ClassesEnum.ITEM_ACTIVE]: router.asPath === "/contacts",
          })}
        >
          <Button
            className={ClassesEnum.ACTION_BTN}
            onClick={() => {
              router.push("/contacts");
              handleOpen();
            }}
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
