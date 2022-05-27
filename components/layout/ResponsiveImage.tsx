import { styled } from "@mui/material/styles";
import Image from "next/image";
import type { FC } from "react";

interface IProps {
  src: string;
  alt: string;
}

enum ClassesEnum {
  ROOT = "image-container-root",
  IMAGE = "image",
}

const LogoImageDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("xl")]: {
    width: "55%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "65%",
  },
  [theme.breakpoints.down("md")]: {
    width: "55%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "65%",
  },
}));

const ResponsiveImage: FC<IProps> = ({ src, alt }) => (
  <LogoImageDiv>
    <Image src={src} alt={alt} layout="responsive" width={500} height={270} />
  </LogoImageDiv>
);

export type { IProps as IResponsiveImageProps };
export default ResponsiveImage;
