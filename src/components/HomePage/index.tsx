import React from "react";
import Stack from "@mui/material/Stack";
import {
  PEOPLE_LIST_PAGE,
  MOVIES_LIST_PAGE,
  PLANETS_LIST_PAGE,
} from "../../locations";
import LinkButton from "../LinkButton";

function HomePage() {
  return (
    <div>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <LinkButton to={PEOPLE_LIST_PAGE}>People</LinkButton>
        <LinkButton to={MOVIES_LIST_PAGE}>Movies</LinkButton>
        <LinkButton to={PLANETS_LIST_PAGE}>Planets</LinkButton>
      </Stack>
    </div>
  );
}

export default HomePage;
