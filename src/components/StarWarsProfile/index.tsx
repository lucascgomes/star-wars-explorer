import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Loader from "../Loader";

interface Profile {
  [key: string]: string;
  id: string;
}

interface Field {
  id: string;
  label: string;
}

interface StarWarsProfileModel {
  fields: Array<Field>;
  title: string;
  isLoading: boolean;
  error: any;
  data: Profile;
}

function StarWarsProfile({
  fields,
  title,
  isLoading,
  error,
  data,
}: StarWarsProfileModel) {
  if (isLoading) {
    return <Loader name="profile" />;
  }

  if (error) {
    return (
      <Alert severity="error">
        An error occurred while retrieving the profile. Please try again later.
      </Alert>
    );
  }

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: 1, marginTop: 1 }}
      >
        {title}
      </Typography>
      {fields.map((field) => (
        <div key={field.id}>
          <TextField
            id={field.id}
            label={field.label}
            value={data[field.id] || ""}
            sx={{ marginBottom: 1, marginTop: 1 }}
            variant="standard"
            disabled
          />
        </div>
      ))}
    </div>
  );
}

export default StarWarsProfile;
