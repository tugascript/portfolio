import Grid from "@mui/material/Grid";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import React from "react";
import type { IText } from "../../interfaces/text";
import type { languageEnum } from "../PreferencesContext";

interface IProps {
  icon: React.ComponentType<SvgIconProps>;
  name: string;
  level: number;
  uses: IText[];
  language: languageEnum;
}

enum ClassesEnum {
  ICON = "lang-lvl-icon",
  PROGRESS = "lang-lvl-progress",
}

const LangLvlGrid = styled(Grid)(({ theme }) => ({
  [`& .${ClassesEnum.ICON}`]: {
    fontSize: "2.75rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  [`& .${ClassesEnum.PROGRESS}`]: {
    height: "1em",
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "transparent",
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down("sm")]: {
      height: "0.85em",
    },
  },
}));

const LanguageLevel: React.FC<IProps> = ({
  icon: Icon,
  name,
  level,
  uses,
  language,
}) => {
  return (
    <LangLvlGrid item container direction="column" md={3} xs={6}>
      <Grid item container alignItems="center">
        <Grid item xs={3}>
          <Icon className={ClassesEnum.ICON} />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h6">{name}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <LinearProgress
          className={ClassesEnum.PROGRESS}
          variant="determinate"
          value={level}
        />
      </Grid>
      <Grid item>
        {uses.map((t, i) => (
          <Typography key={i}>{t[language]}</Typography>
        ))}
      </Grid>
    </LangLvlGrid>
  );
};

export type { IProps as ILanguageLevelProps };
export default LanguageLevel;
