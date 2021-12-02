import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Person {
  name?: string;
  id?: string;
}

function PersonPage() {
  const [person, setPerson]: [Person, Function] = useState({});
  let { personId } = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`)
      .then((response) => response.json())
      .then((data) => setPerson(data));
  }, [personId]);

  return <div>{person.name}</div>;
}

export default PersonPage;
