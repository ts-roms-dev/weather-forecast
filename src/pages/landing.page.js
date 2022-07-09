import React from "react";
import { styled } from "@mui/material/styles";

import { Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

const StyledMainContainer = styled("div")(({ theme }) => ({
  width: "100%",
}));

const StyledPageContainer = styled("div")(({ theme }) => ({
  padding: "0 30vw",
  margin: "auto",
  flexWrap: "wrap",
}));

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // handleGithubLogin
    navigate("/home");
  };

  return (
    <StyledMainContainer>
      <StyledPageContainer>
        <Typography
          variant="p"
          component="h5"
          sx={{
            mt: 12,
            mr: 2,
            fontWeight: 700,
          }}
        >
          Welcome to the weather forecast web application. Please login with
          your Github user to use the application and view the weather in your
          city
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="button"
          sx={{
            mr: 2,
            mt: 6,
            fontFamily: "Roboto",
            textDecoration: "none",
            border: "1px solid rgb(144, 202, 249)",
            borderRadius: "4px",
            padding: "5px 15px",
            cursor: "pointer",
          }}
          onClick={handleLoginClick}
        >
          Login
        </Typography>
      </StyledPageContainer>
    </StyledMainContainer>
  );
};

export default LandingPage;
