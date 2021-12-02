import React from "react";
import { Outlet, useLocation, Location } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";

interface MessageMap {
  [key: string]: string;
}

const LOCATION_TO_MESSAGE: MessageMap = {
  "/": "Star Wars Explorer",
  "/people": "People",
};

function NagivationLayout() {
  const location = useLocation();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {LOCATION_TO_MESSAGE[location.pathname]}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: "80px" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default NagivationLayout;
