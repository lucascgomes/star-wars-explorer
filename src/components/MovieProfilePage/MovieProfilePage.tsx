import React from "react";
import { useParams } from "react-router-dom";
import StarWarsApiProfile from "../StarWarsApiProfile";

const FIELDS = [
  {
    id: "director",
    label: "Director",
  },
  {
    id: "producer",
    label: "Producer",
  },
  {
    id: "release_date",
    label: "Release Date",
  },
];

function MovieProfilePage() {
  let { movieId } = useParams();

  return (
    <div>
      <StarWarsApiProfile
        fields={FIELDS}
        titleAccessor="title"
        api={`https://swapi.dev/api/films/${movieId}`}
      />
    </div>
  );
}

export default MovieProfilePage;
