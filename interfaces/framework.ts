import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { IText } from "./text";

export interface IFramework {
  Icon: ComponentType<SvgIconProps>;
  name: string;
  description: IText;
}
