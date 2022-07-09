import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Typography,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Table,
  Grid,
} from "@mui/material";
import Loading from "../components/loading";

const StyledMainContainer = styled("div")(({ theme }) => ({
  margin: "auto 6rem",
  [theme.breakpoints.up('xs')]: {
    margin: "auto 2rem",
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "1.5rem",
  display: "flex",
  justifyContent: "center",
  width: "15%",
}));

const WeatherPage = () => {
  const navigate = useNavigate();
  const weather = useSelector((state) => state.weatherReducer.weather);
  useEffect(() => {
    if (!weather) {
      navigate(-1);
    }
  }, [weather, navigate]);

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const mapWeather = (data) => {
    const currentDate = new Date();
    const strDate = currentDate.toDateString();
    if (data) {
      return (
        <TableRow>
          <TableCell>{strDate}</TableCell>
          <TableCell>{data?.main?.temp}</TableCell>
          <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{data.weather[0]?.description}</TableCell>
          <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{data.weather[0]?.main}</TableCell>
          <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{data?.main?.pressure}</TableCell>
          <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>{data?.main?.humidity}</TableCell>
        </TableRow>
      );
    }
    return (
      <TableRow>
        <TableCell
          colSpan={6}
          style={{ color: "rgb(118 115 115)", textAlign: "center" }}
        >
          No data available
        </TableCell>
      </TableRow>
    );
  };

  return (
    <StyledMainContainer>
      {weather ? (
        <Grid container>
          <TableContainer component={Paper} style={{ marginTop: "6rem" }}>
            <Typography variant="p" component="h2" style={{ margin: "1rem" }}>
              Weather Forecast: {weather?.name}
            </Typography>
            <Table aria-label="weather-table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Temp</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>Description</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>Main</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>Pressure</TableCell>
                  <TableCell sx={{display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}>Humidity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{mapWeather(weather)}</TableBody>
            </Table>
          </TableContainer>
          <Grid container style={{ display: "flex", justifyContent: "end" }}>
            <StyledButton variant="contained" onClick={handleBackButton}>
              Back
            </StyledButton>
          </Grid>
        </Grid>
      ) : <Loading />}
    </StyledMainContainer>
  );
};

export default WeatherPage;
