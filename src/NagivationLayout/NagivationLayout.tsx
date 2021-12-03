import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Crumb from "./Crumb";

interface MessageMap {
  [key: string]: string;
}

const LOCATION_TO_MESSAGE: MessageMap = {
  "/people": "People",
  "/movies": "Movies",
  "/planets": "Planets",
};

function NagivationLayout() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const listPagePath = `/${paths[1]}`;

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
          <Breadcrumbs color="inherit" aria-label="breadcrumb">
            <Crumb
              to="/"
              label="Star Wars Explorer"
              clickable={pathname !== "/"}
            />
            {paths[1] && (
              <Crumb
                to={listPagePath}
                label={LOCATION_TO_MESSAGE[listPagePath]}
                clickable={pathname !== listPagePath}
              />
            )}
            {paths[2] && <Crumb to="" label="Profile" clickable={false} />}
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: "80px" }}>
        <Outlet />
      </Container>
    </div>
  );
}

export default NagivationLayout;
