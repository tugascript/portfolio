import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const NodeJsIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} viewBox="0 0 250 282">
    <path
      fill="#679E63"
      d="M125 281.703c-3.882 0-7.505-1.035-10.87-2.847l-34.4198-20.445c-5.176-2.847-2.588-3.882-1.0353-4.4 6.9876-2.329 8.2816-2.846 15.528-6.987.7764-.518 1.8116-.259 2.588.259l26.3971 15.786c1.036.518 2.33.518 3.106 0l103.261-59.782c1.035-.518 1.553-1.553 1.553-2.847V81.1335c0-1.294-.518-2.3291-1.553-2.8467L126.294 18.7629c-1.035-.5176-2.329-.5176-3.106 0L19.9275 78.2868c-1.0352.5176-1.5528 1.8115-1.5528 2.8467V200.44c0 1.035.5176 2.329 1.5528 2.847l28.2091 16.304c15.2692 7.764 24.8448-1.294 24.8448-10.352V91.4855c0-1.5528 1.294-3.1056 3.1056-3.1056h13.1987c1.5528 0 3.1056 1.294 3.1056 3.1056V209.239c0 20.445-11.1284 32.35-30.5383 32.35-5.9524 0-10.6108 0-23.8095-6.47l-27.1739-15.528C4.14079 215.709 0 208.463 0 200.699V81.3923C0 73.6284 4.14079 66.382 10.8696 62.5L114.13 2.71739c6.47-3.623187 15.27-3.623187 21.74 0L239.13 62.5C245.859 66.382 250 73.6284 250 81.3923V200.699c0 7.764-4.141 15.01-10.87 18.892l-103.26 59.783c-3.365 1.553-7.247 2.329-10.87 2.329zm31.832-82.039c-45.29 0-54.606-20.704-54.606-38.303 0-1.553 1.294-3.105 3.105-3.105h13.458c1.553 0 2.847 1.035 2.847 2.588 2.07 13.716 8.022 20.445 35.455 20.445 21.739 0 31.056-4.917 31.056-16.563 0-6.729-2.588-11.646-36.491-15.011-28.209-2.846-45.807-9.058-45.807-31.573 0-20.9629 17.598-33.3853 47.101-33.3853 33.127 0 49.431 11.3872 51.501 36.2323 0 .776-.258 1.552-.776 2.329-.518.517-1.294 1.035-2.07 1.035h-13.458c-1.294 0-2.588-1.035-2.847-2.329-3.105-14.234-11.128-18.893-32.35-18.893-23.809 0-26.656 8.282-26.656 14.493 0 7.505 3.364 9.835 35.455 13.975 31.833 4.141 46.843 10.094 46.843 32.35-.259 22.775-18.892 35.715-51.76 35.715z"
    />
  </SvgIcon>
);

export default NodeJsIcon;