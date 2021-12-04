import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";

interface Item {
  [key: string]: string;
  id: string;
}

interface StarWarsApiListModel {
  api: string;
  itemLocationPath: string;
  accessor: string;
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

function StarWarsApiList({
  api,
  itemLocationPath,
  accessor,
}: StarWarsApiListModel) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllPages(api, setItems);
  }, [api]);

  return (
    <List>
      {items.map((item: Item) => (
        <ListItemButton
          component={Link}
          to={`${itemLocationPath}/${item.id}`}
          key={item.id}
        >
          <ListItemText primary={item[accessor]} />
        </ListItemButton>
      ))}
    </List>
  );
}

export default StarWarsApiList;
