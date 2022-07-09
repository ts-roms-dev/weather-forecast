import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const StyledPageContainer = styled(Container)(({ theme }) => ({
  paddingTop: "2rem",
}));

const StyledContainer = styled("div")(({ theme }) => ({
  paddingTop: "2rem",
}));

const Loading = () => {
  return (
    <StyledPageContainer style={{ textAlign: "center" }}>
      <StyledContainer style={{ fontSize: "2rem" }}>Loading...</StyledContainer>
    </StyledPageContainer>
  );
};

export default Loading;
