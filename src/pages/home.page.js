import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { Container, Typography, InputBase, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
  width: '100%',
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

const StyledButton = styled(Button)(({ theme }) => ({
}));

const HomePage = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({});

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValue({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValue", formValue);
    navigate("/weather-forecast");
  };

  return (
    <StyledMainContainer>
      <StyledFormContainer>
        <StyledDisplayPanel>
          <Typography variant="p" component="h2">
            John Doe
          </Typography>
          <Typography variant="p" component="h5">
            Github Link
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
                  name={'city'}
                />
              </Search>
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <StyledButton variant="contained" type="submit">
                Display Weather
              </StyledButton>
            </Grid>
          </Grid>
        </StyledForm>
      </StyledFormContainer>
    </StyledMainContainer>
  );
};

export default HomePage;
