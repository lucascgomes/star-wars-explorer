import React from "react";
import StarWarsApiList from "../StarWarsApiList";

function PeopleListPage() {
  return (
    <div>
      <StarWarsApiList
        api="https://swapi.dev/api/people"
        itemLocationPath="/people"
        accessor="name"
      />
    </div>
  );
}

export default PeopleListPage;
