import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Auth0ProviderWithRedirectCallback } from "./authentication/auth-provider";
import { Provider } from "react-redux";
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 567,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
});

const app = (
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={process.env.REACT_APP_REDIRECT_URI}
        audience={process.env.REACT_APP_AUDIENCE}
        scope={process.env.REACT_APP_SCOPE}
      >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
);
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();