import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { useContext } from "react";
import type { IText } from "../../interfaces/text";
import { PreferencesCtx } from "../PreferencesContext";
import type { IPortfolioItemProps } from "./PortfolioItem";
import SubSection from "./SubSection";

interface ISubProps {
  subTitle: IText;
  items: IPortfolioItemProps[];
}

interface IProps {
  title: IText;
  subSections: ISubProps[];
}

enum ClassesEnum {
  ROOT = "port-section-root",
  TITLE = "port-section-title",
}

const Section: FC<IProps> = ({ title, subSections }) => {
  const { language } = useContext(PreferencesCtx);
  return (
    <Grid
      component="section"
      xs={12}
      container
      item
      justifyContent="center"
      style={{ margin: "0.5em 0" }}
    >
      <Grid item sm={11} xs={12}>
        <Typography className={ClassesEnum.TITLE} gutterBottom variant="h4">
          {title[language]}
        </Typography>
      </Grid>
      {subSections.map(({ subTitle, items }, i) => (
        <SubSection title={subTitle[language]} items={items} key={i} />
      ))}
    </Grid>
  );
};

export type { IProps as ISectionProps };
export { ClassesEnum as sectionClasses };
export default Section;
