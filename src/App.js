import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/headers/navigation";
import MainLayout from "./layout/main.layout";
import Loading from "./components/loading";

const LandingPage = lazy(() => import("./pages/landing.page"));
const HomePage = lazy(() => import("./pages/home.page"));
const WeatherPage = lazy(() => import("./pages/weather.page"));

function App() {
  return (
    <MainLayout>
      <Navigation />
      <Suspense
        fallback={<Loading />  }
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
