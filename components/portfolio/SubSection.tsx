import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import type { IPortfolioItemProps } from "./PortfolioItem";
import PortfolioItem from "./PortfolioItem";

interface IProps {
  title: string;
  items: IPortfolioItemProps[];
}

const SubSection: FC<IProps> = ({ title, items }) => (
  <Grid item sm={11} xs={12} spacing={1} container>
    <Grid item xs={12}>
      <Typography variant="h5" color="text.secondary">
        {title}
      </Typography>
    </Grid>
    {items.map((props, i) => (
      <PortfolioItem {...props} key={i} />
    ))}
  </Grid>
);

export type { IProps as ISubSectionProps };
export default SubSection;
