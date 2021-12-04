import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

interface CrumbModel {
  to: string;
  label: string;
  clickable: boolean;
}

function Crumb({ to, label, clickable }: CrumbModel) {
  return clickable ? (
    <MuiLink
      variant="h6"
      color="inherit"
      underline="hover"
      component={Link}
      to={to}
    >
      {label}
    </MuiLink>
  ) : (
    <Typography variant="h6">{label}</Typography>
  );
}

export default Crumb;
