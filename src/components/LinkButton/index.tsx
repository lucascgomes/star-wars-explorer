import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

interface LinkButtonModel {
  to: string;
  children: any;
}

function LinkButton({ to, children }: LinkButtonModel) {
  return (
    <Button
      sx={{ minWidth: 300 }}
      variant="outlined"
      size="large"
      component={Link}
      to={to}
    >
      {children}
    </Button>
  );
}

export default LinkButton;
