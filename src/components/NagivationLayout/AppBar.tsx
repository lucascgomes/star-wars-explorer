import React from "react";
import { useLocation } from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
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

function AppBar() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  const listPagePath = `/${paths[1]}`;

  return (
    <MuiAppBar>
      <Toolbar>
        <MovieFilterIcon sx={{ marginRight: 3 }} />
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
    </MuiAppBar>
  );
}

export default AppBar;
