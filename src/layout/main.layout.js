import React from "react";
import { styled } from "@mui/material/styles";

const StyledMainContainer = styled("div")(({ theme }) => ({
  position: "relative",
}));

const MainLayout = (props) => (
  <StyledMainContainer>{props.children}</StyledMainContainer>
);

export default MainLayout;
