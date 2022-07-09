import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { Container, Typography, InputBase, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAuth0 } from "@auth0/auth0-react";
import { fetchCity } from "../api/weather.service";
import Loading from "../components/loading";

const StyledMainContainer = styled("div")(({ theme }) => ({
  margin: "auto 6rem",
}));

const StyledFormContainer = styled(Container)(({ theme }) => ({
  paddingTop: "2rem",
}));

const StyledDisplayPanel = styled(Container)(({ theme }) => ({
  textAlign: "center",
}));

const StyledForm = styled("form")(({ theme }) => ({
  paddingTop: "3rem",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
    border: "1px solid #cecece",
    borderRadius: "5px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({}));

const HomePage = () => {
  const navigate = useNavigate();
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const [weather, setWeather] = useState([]);
  const [userMetadata, setUserMetadata] = useState(null);
  const [formValue, setFormValue] = useState({});

  console.log("userMetadata", userMetadata);
  console.log("Weather", weather);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherResponse = await fetchCity(formValue);
    setWeather(weatherResponse);
    navigate("/weather-forecast");
  };

  console.log("S", user);
  return (
    <React.Fragment>
      {!isLoading ? (
        <StyledMainContainer>
          <StyledFormContainer>
            <StyledDisplayPanel>
              <Typography variant="p" component="h2">
                {user?.name}
              </Typography>
              <Typography variant="p" component="h5">
                {user?.sub}
              </Typography>
            </StyledDisplayPanel>
            <StyledForm onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="City"
                      inputProps={{ "aria-label": "city" }}
                      onChange={handleInput}
                      name={"city"}
                    />
                  </Search>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <StyledButton variant="contained" type="submit">
                    Display Weather
                  </StyledButton>
                </Grid>
              </Grid>
            </StyledForm>
          </StyledFormContainer>
        </StyledMainContainer>
      ) : (
        <Loading />
      )}
    </React.Fragment>
  );
};

export default HomePage;
