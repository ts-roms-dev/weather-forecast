import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { styled, alpha } from "@mui/material/styles";
import { Container, Typography, InputBase, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/loading";
import { fetchCityWeather } from "../redux/actions";

const StyledMainContainer = styled("div")(({ theme }) => ({
  margin: "auto 6rem",
  [theme.breakpoints.up('xs')]: {
    margin: "auto 1rem",
  }
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

  const dispatch = useDispatch();
  const { user, isLoading } = useAuth0();
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState("");


  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = dispatch(await fetchCityWeather(formValue));
    if (response.payload !== undefined) {
      navigate("/weather-forecast");  
    }
    setError("No matching location found.");
  };

  return (
    <React.Fragment>
      {!isLoading ? (
        <StyledMainContainer>
          <StyledFormContainer>
            <StyledDisplayPanel>
              <Typography variant="p" component="h2">
                {user?.name}
              </Typography>
              <Typography variant="p" component="a" href={'https://github.com/ts-roms/weather-forecast'} sx={{ cursor: 'pointer'}}>
                https://github.com/ts-roms/weather-forecast
              </Typography>
              {error ? (<Typography variant="p" component="h5" sx={{ mt: 3, color: 'red'}}>
                  {error}
                </Typography>
              ) : null}
            </StyledDisplayPanel>
            <StyledForm onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search City"
                      inputProps={{ "aria-label": "city", autoComplete: "off" }}
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
