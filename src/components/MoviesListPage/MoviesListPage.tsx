import React from "react";
import StarWarsApiList from "../StarWarsApiList";

function MoviesListPage() {
  return (
    <div>
      <StarWarsApiList
        api="https://swapi.dev/api/films"
        itemLocationPath="/movies"
        accessor="title"
      />
    </div>
  );
}

export default MoviesListPage;
