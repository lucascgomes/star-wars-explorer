import React from "react";
import { Outlet } from "react-router-dom";
import MuiContainer from "@mui/material/Container";
import MuiPaper from "@mui/material/Paper";
import { styled } from "@mui/system";
import AppBar from "./AppBar";

const Container = styled(MuiContainer)({
  paddingTop: "100px",
  paddingBottom: "36px",
});

const Paper = styled(MuiPaper)({
  backgroundColor: "#000",
  backgroundImage: "none",
});

function NagivationLayout() {
  return (
    <Paper>
      <AppBar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </Paper>
  );
}

export default NagivationLayout;
