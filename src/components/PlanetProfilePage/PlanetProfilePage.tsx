import React from "react";
import { useParams } from "react-router-dom";
import StarWarsApiProfile from "../StarWarsApiProfile";

const FIELDS = [
  {
    id: "terrain",
    label: "Terrain",
  },
  {
    id: "population",
    label: "Population",
  },
  {
    id: "climate",
    label: "Climate",
  },
  {
    id: "diameter",
    label: "Diameter",
  },
];

function PlanetProfilePage() {
  let { planetId } = useParams();

  return (
    <div>
      <StarWarsApiProfile
        fields={FIELDS}
        titleAccessor="name"
        api={`https://swapi.dev/api/planets/${planetId}`}
      />
    </div>
  );
}

export default PlanetProfilePage;
