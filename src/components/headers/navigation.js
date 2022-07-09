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

const Navigation = () => {
  const authenticated = true;
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
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Weather Forecast
          </Typography>
          {!authenticated ? (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                width: "70%",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgb(144, 202, 249)",
                  borderRadius: "4px",
                  padding: "5px 15px",
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
