import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  INDEX,
  PEOPLE_LIST_PAGE,
  MOVIES_LIST_PAGE,
  PLANETS_LIST_PAGE,
  PERSON_PROFILE_PAGE,
  MOVIE_PROFILE_PAGE,
  PLANET_PROFILE_PAGE,
} from "../../locations";
import Crumb from "./Crumb";

interface MessageMap {
  [key: string]: string;
}

const LOCATION_TO_MESSAGE: MessageMap = {
  [PEOPLE_LIST_PAGE]: "People",
  [MOVIES_LIST_PAGE]: "Movies",
  [PLANETS_LIST_PAGE]: "Planets",
};

const LIST_PAGES = [PEOPLE_LIST_PAGE, MOVIES_LIST_PAGE, PLANETS_LIST_PAGE];
const PROFILE_PAGES = [
  PERSON_PROFILE_PAGE,
  MOVIE_PROFILE_PAGE,
  PLANET_PROFILE_PAGE,
];

function AppBar() {
  const { pathname } = useLocation();
  const { profileId } = useParams();
  const listPagePath = LIST_PAGES.find((page) => pathname.includes(page));
  const showProfileCrumb = PROFILE_PAGES.find(
    (page) => pathname === page.replace(":profileId", profileId || "")
  );

  return (
    <MuiAppBar>
      <Toolbar>
        <MovieFilterIcon sx={{ marginRight: 3 }} />
        <Breadcrumbs color="inherit" aria-label="breadcrumb">
          <Crumb
            to={INDEX}
            label="Star Wars Explorer"
            clickable={pathname !== INDEX}
          />
          {listPagePath && (
            <Crumb
              to={listPagePath}
              label={LOCATION_TO_MESSAGE[listPagePath]}
              clickable={pathname !== listPagePath}
            />
          )}
          {showProfileCrumb && (
            <Crumb to="" label="Profile" clickable={false} />
          )}
        </Breadcrumbs>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
