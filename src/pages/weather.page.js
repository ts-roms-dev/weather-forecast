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

  const mapWeather = (weather) => {
    if (weather !== undefined) {
      return (
        <TableRow>
          <TableCell>{weather?.current?.last_updated}</TableCell>
          <TableCell>{weather?.current?.temp_c}</TableCell>
          <TableCell>{weather?.current?.condition.text}</TableCell>
          <TableCell>{weather?.current?.wind_dir}</TableCell>
          <TableCell>{weather?.current?.pressure_in}</TableCell>
          <TableCell>{weather?.current?.humidity}</TableCell>
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
              Weather Forecast: {weather?.location?.name}
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="weather-table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Temp</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Main</TableCell>
                  <TableCell>Pressure</TableCell>
                  <TableCell>Humidity</TableCell>
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
