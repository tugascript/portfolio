import Collapse from "@mui/material/Collapse";
import type { ListItemProps } from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import type { MenuItemProps } from "@mui/material/MenuItem";
import React from "react";
import PortugalIcon from "../../icons/PortugalIcon";
import UkIcon from "../../icons/UkIcon";
import { PreferencesCtx } from "../../PreferencesContext";

interface IProps {
  className: string;
  item: React.ComponentType<ListItemProps | MenuItemProps>;
  open: boolean;
  onClose: () => void;
}

const LanguageCollapse: React.FC<IProps> = ({
  open,
  className,
  item: Item,
  onClose,
}) => {
  const { changeLanguage } = React.useContext(PreferencesCtx);

  return (
    <Collapse in={open}>
      <Item
        className={className}
        onClick={() => {
          changeLanguage("en");
          onClose();
        }}
      >
        <ListItemIcon>
          <UkIcon fontSize="small" />
        </ListItemIcon>
        English
      </Item>
      <Item
        className={className}
        onClick={() => {
          changeLanguage("pt");
          onClose();
        }}
      >
        <ListItemIcon>
          <PortugalIcon />
        </ListItemIcon>
        Português
      </Item>
    </Collapse>
  );
};

export default LanguageCollapse;
