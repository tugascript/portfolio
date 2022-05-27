import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { IFramework } from "../../../../interfaces/framework";
import Framework from "./Framework";
import Grid from "@mui/material/Grid";

interface IProps {
  index: number;
  frameworks: IFramework[];
}

const Frameworks: React.FC<IProps> = ({ index, frameworks }) => (
  <TabPanel value={index.toString()}>
    <Grid container>
      {frameworks.map((framework, i) => (
        <Framework key={`frameworks-${i}`} {...framework} />
      ))}
    </Grid>
  </TabPanel>
);

export default Frameworks;
