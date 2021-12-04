import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Profile {
  [key: string]: any;
  id?: string;
}

interface Field {
  id: string;
  label: string;
}

interface StarWarsApiProfileModel {
  fields: Array<Field>;
  titleAccessor: string;
  api: string;
}

function StarWarsApiProfile({
  fields,
  titleAccessor,
  api,
}: StarWarsApiProfileModel) {
  const [profile, setProfile]: [Profile, Function] = useState({});

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, [api]);

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: 1, marginTop: 1 }}
      >
        {profile[titleAccessor]}
      </Typography>
      {fields.map((field) => (
        <div key={field.id}>
          <TextField
            id={field.id}
            label={field.label}
            value={profile[field.id] || ""}
            sx={{ marginBottom: 1, marginTop: 1 }}
            variant="standard"
            disabled
          />
        </div>
      ))}
    </div>
  );
}

export default StarWarsApiProfile;
