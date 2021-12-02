import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Stack spacing={2} justifyContent="center" alignItems="center">
        <Button
          style={{ width: "200px" }}
          variant="contained"
          component={Link}
          to="/people"
        >
          People
        </Button>
        <Button
          style={{ width: "200px" }}
          variant="contained"
          component={Link}
          to="/movies"
        >
          Movies
        </Button>
        <Button
          style={{ width: "200px" }}
          variant="contained"
          component={Link}
          to="/planets"
        >
          Planets
        </Button>
      </Stack>
    </div>
  );
}

export default HomePage;
