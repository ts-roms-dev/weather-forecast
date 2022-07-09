import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/headers/navigation";
import MainLayout from "./layout/main.layout";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const LandingPage = lazy(() => import("./pages/landing.page"));
const HomePage = lazy(() => import("./pages/home.page"));
const WeatherPage = lazy(() => import("./pages/weather.page"));

const StyledPageContainer = styled(Container)(({ theme }) => ({
  paddingTop: "2rem",
}));

const StyledContainer = styled("div")(({ theme }) => ({
  paddingTop: "2rem",
}));

function App() {
  return (
    <MainLayout>
      <Navigation />
      <Suspense
        fallback={
          <StyledPageContainer style={{ textAlign: "center" }}>
            <StyledContainer style={{ fontSize: "2rem" }}>
              Loading...
            </StyledContainer>
          </StyledPageContainer>
        }
      >
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/weather-forecast"} element={<WeatherPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
