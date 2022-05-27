import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import React from "react";
import PortugalIcon from "../../icons/PortugalIcon";
import UkIcon from "../../icons/UkIcon";
import { languageEnum, PreferencesCtx } from "../../PreferencesContext";

interface IProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

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

const LanguageMenu: React.FC<IProps> = ({ anchorEl, open, onClose }) => {
  const { changeLanguage } = React.useContext(PreferencesCtx);

  const handleChange = (lang: languageEnum) => {
    changeLanguage(lang);
    onClose();
  };

  return (
    <StyledMenu
      id="nav-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      className={ClassesEnum.ROOT}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      disableScrollLock
      sx={{
        color: "#fff",
      }}
    >
      <MenuItem className={ClassesEnum.ITEM} onClick={() => handleChange("pt")}>
        <ListItemIcon>
          <PortugalIcon fontSize="small" />
        </ListItemIcon>
        PT
      </MenuItem>
      <MenuItem className={ClassesEnum.ITEM} onClick={() => handleChange("en")}>
        <ListItemIcon>
          <UkIcon fontSize="small" />
        </ListItemIcon>
        EN
      </MenuItem>
    </StyledMenu>
  );
};

export default LanguageMenu;
