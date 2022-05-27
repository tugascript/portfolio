import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const PandasIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} fill="none" viewBox="0 0 150 150">
    <path
      fill="#130654"
      d="M108.984 0H41.0156C18.3633 0 0 18.3633 0 41.0156v67.9684C0 131.637 18.3633 150 41.0156 150h67.9684C131.637 150 150 131.637 150 108.984V41.0156C150 18.3633 131.637 0 108.984 0Z"
    />
    <path
      fill="#fff"
      d="M71.3727 20.1639H57.9255v27.9218h13.4472V20.1639ZM71.3727 77.5204H57.9255v27.9216h13.4472V77.5204Z"
    />
    <path
      fill="#FFCA00"
      d="M71.3727 56.2357H57.9255v13.1739h13.4472V56.2357Z"
    />
    <path
      fill="#fff"
      d="M49.7755 43.1234H36.3281v92.8136h13.4474V43.1234ZM92.529 100.558H79.0817v27.922H92.529v-27.922ZM92.529 43.1569H79.0817v27.9219H92.529V43.1569Z"
    />
    <path fill="#E70488" d="M92.529 79.2286H79.0817v13.1738H92.529V79.2286Z" />
    <path fill="#fff" d="M113.68 12.8906h-13.448v92.8144h13.448V12.8906Z" />
  </SvgIcon>
);

export default PandasIcon;
