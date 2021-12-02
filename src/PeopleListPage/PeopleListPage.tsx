import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

interface Person {
  name: string;
  id: string;
}

async function getAllPages(api: string, onResult: Function) {
  let nextPage = api;
  let result: any[] = [];

  while (nextPage) {
    const data = await fetch(nextPage).then((response) => response.json());
    nextPage = data.next;
    result = result.concat(data.results);
  }

  onResult(
    result.map((item: any) => ({
      ...item,
      id: item.url.match(/\/(\d+)\//)[1],
    }))
  );
}

function PeopleListPage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAllPages("https://swapi.dev/api/people", setPeople);
  }, []);

  return (
    <div>
      <List>
        {people.map((person: Person) => (
          <ListItemButton
            component={Link}
            to={`/people/${person.id}`}
            key={person.id}
          >
            <ListItemText primary={person.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}

export default PeopleListPage;
