import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/headers/navigation";
import MainLayout from "./layout/main.layout";
import Loading from "./components/loading";
import { ProtectedRoute } from "./authentication/protected-route";

import "./App.css";

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
          <Route path={"/"} exact element={<LandingPage />} />
          <Route path={"/home"} element={<ProtectedRoute component={HomePage} />} />
          <Route path={"/weather-forecast"} element={<ProtectedRoute component={WeatherPage} />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;
