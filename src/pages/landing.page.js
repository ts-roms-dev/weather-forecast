import React from "react";
import { useNavigate } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/loading";

const StyledMainContainer = styled("div")(({ theme }) => ({
  width: "100%",
}));

const StyledPageContainer = styled("div")(({ theme }) => ({
  padding: "0 30vw",
  margin: "auto",
  flexWrap: "wrap",
  [theme.breakpoints.up('xs')]: {
    padding: "0 9vw",
  }
}));

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  const handleLoginClick = () => {
    loginWithRedirect();
  };

  return (
    <StyledMainContainer>
      {!isLoading ? (
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
          {!isAuthenticated ? (
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
          ) : (
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
              onClick={() => navigate('/home')}
            >
              Let's forecast the City Weather
            </Typography>
          )}
        </StyledPageContainer>
      ) : (
        <Loading />
      )}
    </StyledMainContainer>
  );
};

export default LandingPage;
