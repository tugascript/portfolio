import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const MatplotlibIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} fill="none" viewBox="0 0 180 180">
    <g fill="#FFF" strokeWidth="2">
      <circle cx="90" cy="90" r="88" />
      <circle cx="90" cy="90" r="66" />
      <circle cx="90" cy="90" r="44" />
      <circle cx="90" cy="90" r="22" />
      <path d="M90 2v176m62-26L28 28m124 0L28 152m150-62H2" />
    </g>
    <g opacity=".8">
      <path fill="#44C" d="M90 90h18a18 18 0 0 0 0-5z" />
      <path fill="#BC3" d="m90 90 34-43a55 55 0 0 0-15-8z" />
      <path fill="#D93" d="M90 90 74 18a74 74 0 0 0-31 15z" />
      <path fill="#DB3" d="M90 90 32 62a65 65 0 0 0-5 39z" />
      <path fill="#3BB" d="m90 90-33 16a37 37 0 0 0 2 5z" />
      <path fill="#3C9" d="m90 90-10 45a46 46 0 0 0 18 0z" />
      <path fill="#D73" d="m90 90 46 58a74 74 0 0 0 12-12z" />
    </g>
  </SvgIcon>
);

export default MatplotlibIcon;
