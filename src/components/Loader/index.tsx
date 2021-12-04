import React from "react";
import Typography from "@mui/material/Typography";

interface LoaderModel {
  name: string;
}

function Loader({ name }: LoaderModel) {
  return (
    <div>
      <Typography variant="h6">Loading {name}...</Typography>
    </div>
  );
}

export default Loader;
