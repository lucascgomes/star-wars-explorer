import React from "react";
import { useParams } from "react-router-dom";
import StarWarsApiProfile from "../StarWarsApiProfile";

const FIELDS = [
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

function PersonProfilePage() {
  let { personId } = useParams();

  return (
    <div>
      <StarWarsApiProfile
        fields={FIELDS}
        titleAccessor="name"
        api={`https://swapi.dev/api/people/${personId}`}
      />
    </div>
  );
}

export default PersonProfilePage;
