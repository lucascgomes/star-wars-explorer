import React from "react";
import StarWarsApiList from "../StarWarsApiList";

function PlanetsListPage() {
  return (
    <div>
      <StarWarsApiList
        api="https://swapi.dev/api/planets"
        itemLocationPath="/planets"
        accessor="name"
      />
    </div>
  );
}

export default PlanetsListPage;
