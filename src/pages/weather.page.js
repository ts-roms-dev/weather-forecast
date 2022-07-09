import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

const StyledMainContainer = styled("div")(({ theme }) => ({
  margin: "auto 6rem",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: "1.5rem",
  display: "flex",
  justifyContent: "center",
  width: "15%",
}));

const WeatherPage = (props) => {
  const navigate = useNavigate();

  const weather = [
    {
      date: "09/01/2022",
      temp: "75",
      description: "Sky is Clear",
      main: "Clear",
      pressure: "1023.86",
      humidity: "100",
    },
  ];

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const mapWeather = (weather) => {
    let weatherData = null;
    if (weather) {
      weatherData = weather?.map((forecast, key) => (
        <TableRow key={key}>
          <TableCell>{forecast.date}</TableCell>
          <TableCell>{forecast.temp}</TableCell>
          <TableCell>{forecast.description}</TableCell>
          <TableCell>{forecast.main}</TableCell>
          <TableCell>{forecast.pressure}</TableCell>
          <TableCell>{forecast.humidity}</TableCell>
        </TableRow>
      ));
    }
    weatherData = (
      <TableRow>
        <TableCell
          colSpan={6}
          style={{ color: "rgb(118 115 115)", textAlign: "center" }}
        >
          No data available
        </TableCell>
      </TableRow>
    );
    return weatherData;
  };

  return (
    <StyledMainContainer>
      <TableContainer component={Paper} style={{ marginTop: "6rem" }}>
        <Typography variant="p" component="h2" style={{ margin: "1rem" }}>
          Weather Forecast
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
    </StyledMainContainer>
  );
};

export default WeatherPage;
