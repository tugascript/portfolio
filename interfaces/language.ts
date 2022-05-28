import type { ComponentType } from "react";
import { IFramework } from "./framework";

export interface ILanguage {
  Icon: ComponentType<any>;
  name: string;
  frameworks: IFramework[];
}
