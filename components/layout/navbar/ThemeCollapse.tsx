import Collapse from "@mui/material/Collapse";
import type { ListItemProps } from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import type { MenuItemProps } from "@mui/material/MenuItem";
import React from "react";
import NodeJsIcon from "../../icons/NodeJsIcon";
import PythonIcon from "../../icons/PythonIcon";
import { PreferencesCtx } from "../../PreferencesContext";

interface IProps {
  className: string;
  item: React.ComponentType<ListItemProps | MenuItemProps>;
  open: boolean;
  onClose: () => void;
}

const ThemeCollapse: React.FC<IProps> = ({
  className,
  open,
  item: Item,
  onClose,
}) => {
  const { changeTheme } = React.useContext(PreferencesCtx);

  return (
    <Collapse in={open}>
      <Item
        className={className}
        onClick={() => {
          changeTheme("nodejs");
          onClose();
        }}
      >
        <ListItemIcon>
          <NodeJsIcon fontSize="small" />
        </ListItemIcon>
        NodeJs
      </Item>
      <Item
        className={className}
        onClick={() => {
          changeTheme("python");
          onClose();
        }}
      >
        <ListItemIcon>
          <PythonIcon />
        </ListItemIcon>
        Python
      </Item>
    </Collapse>
  );
};

export default ThemeCollapse;
