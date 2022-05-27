import { styled } from "@mui/material/styles";
import { FC } from "react";
import Image from "next/image";
import photo from "../../../public/home-photo.png";

const HomeImageDiv = styled("div")(({ theme }) => ({
  width: "50%",
  height: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.down("xs")]: {
    width: "60%",
  },
}));

const HomeImage: FC = () => (
  <HomeImageDiv>
    <Image src={photo} alt="A photo of Afonso Barracha" layout="responsive" />
  </HomeImageDiv>
);

export default HomeImage;
