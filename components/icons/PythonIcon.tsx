import type { SvgIconProps } from "@mui/material/SvgIcon";
import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const PythonIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 255">
    <defs>
      <linearGradient
        id="a"
        x1="12.9593594%"
        x2="79.6388325%"
        y1="12.0393928%"
        y2="78.2008538%"
      >
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="19.127525%"
        x2="90.7415328%"
        y1="20.5791813%"
        y2="88.4290372%"
      >
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M126.915866.07227555C62.0835831.07228017 66.1321288 28.1874648 66.1321288 28.1874648l.0722755 29.1270467h61.8678717v8.7453417H41.6307171S.1445511 61.3549438.1445511 126.771315c-.00000463 65.416358 36.2100508 63.096556 36.2100508 63.096556h21.6103896V159.51214s-1.1648552-36.210051 35.6318464-36.210051H154.95878s34.475438.557297 34.475438-33.3190286V33.9695088c0-.0000047 5.234323-33.89723325-62.518352-33.89723325zM92.8018069 19.6589497c6.1553999-.0000045 11.1304351 4.9750349 11.1304351 11.1304348.000004 6.1553999-4.9750352 11.1304348-11.1304351 11.1304348-6.1553999.0000046-11.1304348-4.9750349-11.1304348-11.1304348-.0000047-6.1553999 4.9750349-11.1304348 11.1304348-11.1304348z"
    />
    <path
      fill="url(#b)"
      d="M128.757101 254.126271c64.832302 0 60.783738-28.11519 60.783738-28.11519l-.072275-29.127046h-61.867872v-8.745342h86.441559s41.486166 4.704896 41.486166-60.711485c.000023-65.4163514-36.210051-63.0965491-36.210051-63.0965491h-21.61039v30.3557243s1.164874 36.2100508-35.631846 36.2100508h-61.361948s-34.475437-.557296-34.475437 33.319052v56.013552s-5.2343225 33.897233 62.518356 33.897233zm34.114059-19.586674c-6.155401 0-11.130434-4.975033-11.130434-11.130435 0-6.155403 4.975033-11.130435 11.130434-11.130435 6.155403 0 11.130435 4.975032 11.130435 11.130435.000023 6.155402-4.975032 11.130435-11.130435 11.130435z"
    />
  </SvgIcon>
);

export default PythonIcon;
