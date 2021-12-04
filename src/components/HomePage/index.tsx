import React from "react";
import Stack from "@mui/material/Stack";
import LinkButton from "../LinkButton";

function HomePage() {
  return (
    <div>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <LinkButton to="/people">People</LinkButton>
        <LinkButton to="/movies">Movies</LinkButton>
        <LinkButton to="/planets">Planets</LinkButton>
      </Stack>
    </div>
  );
}

export default HomePage;
