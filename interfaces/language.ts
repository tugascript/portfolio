import type { ComponentType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import { IFramework } from "./framework";

export interface ILanguage {
  Icon: ComponentType<SvgIconProps>;
  name: string;
  frameworks: IFramework[];
}
