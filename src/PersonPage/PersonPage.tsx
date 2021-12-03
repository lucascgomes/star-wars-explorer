import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface Person {
  [key: string]: any;
  id?: string;
  name?: string;
}

interface Field {
  id: string;
  label: string;
}

const FIELDS: Array<Field> = [
  {
    id: "height",
    label: "Height",
  },
  {
    id: "mass",
    label: "Mass",
  },
  {
    id: "hair_color",
    label: "Hair Color",
  },
  {
    id: "skin_color",
    label: "Skin Color",
  },
  {
    id: "eye_color",
    label: "Eye Color",
  },
  {
    id: "birth_year",
    label: "Birth Year",
  },
  {
    id: "gender",
    label: "Gender",
  },
];

function PersonPage() {
  const [person, setPerson]: [Person, Function] = useState({});
  let { personId } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  }, [personId]);

  return (
    <div>
      <Typography
        variant="h6"
        component="div"
        sx={{ marginBottom: 1, marginTop: 1 }}
      >
        {person.name}
      </Typography>
      {FIELDS.map((field) => (
        <div key={field.id}>
          <TextField
            id={field.id}
            label={field.label}
            value={person[field.id] || ""}
            sx={{ marginBottom: 1, marginTop: 1 }}
            variant="standard"
            disabled
          />
        </div>
      ))}
    </div>
  );
}

export default PersonPage;
