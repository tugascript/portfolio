import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const PortugalIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 512 512">
    <path
      fill="#6da544"
      d="M0 256c0 110.07 69.472 203.905 166.955 240.076l22.262-240.077-22.262-240.076C69.472 52.095 0 145.929 0 256z"
    />
    <path
      fill="#d80027"
      d="M512 256C512 114.616 397.384 0 256 0c-31.314 0-61.311 5.633-89.045 15.923v480.154C194.689 506.368 224.686 512 256 512c141.384 0 256-114.616 256-256z"
    />
    <circle cx="166.957" cy="256" r="89.043" fill="#ffda44" />
    <path
      fill="#d80027"
      d="M116.87 211.478v55.652c0 27.662 22.424 50.087 50.087 50.087s50.087-22.424 50.087-50.087v-55.652z"
    />
    <path
      fill="#f0f0f0"
      d="M166.957 283.826c-9.206 0-16.696-7.49-16.696-16.696v-22.26h33.391v22.261c0 9.205-7.49 16.695-16.695 16.695z"
    />
  </SvgIcon>
);

export default PortugalIcon;
