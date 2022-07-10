import React from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <AppBar position={"static"}>
      <Container maxWidth={"xl"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Weather Forecast
          </Typography>
          {isAuthenticated ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                width: { xs: '85%', md: '70%'},
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => logout({ returnTo: window.location.origin })}
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgb(144, 202, 249)",
                  borderRadius: "4px",
                  padding: "5px 15px",
                  cursor: 'pointer',
                  justifyCotent: { xs: 'end'}
                }}
              >
                Logout
              </Typography>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
