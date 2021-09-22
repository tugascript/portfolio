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

const LogoImageDiv = styled("div")({
  [`&.${ClassesEnum.ROOT}`]: {
    width: "100%",
  },
  ["& div"]: {
    position: "unset !important",
  },
  [`& .${ClassesEnum.IMAGE}`]: {
    objectFit: "contain",
    width: "100% !important",
    position: "relative !important",
    height: "unset !important",
  },
});

const ResponsiveImage: FC<IProps> = ({ src, alt }) => (
  <LogoImageDiv className={ClassesEnum.ROOT}>
    <Image src={src} alt={alt} layout="fill" className={ClassesEnum.IMAGE} />
  </LogoImageDiv>
);

export type { IProps as IResponsiveImageProps };
export default ResponsiveImage;
