import React from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Loader from "../Loader";

interface Item {
  [key: string]: string;
  id: string;
}

interface StarWarsListModel {
  items: Array<Item>;
  isLoading: boolean;
  error: any;
  link: string;
  accessor: string;
}

function StarWarsList({
  items,
  isLoading,
  error,
  link,
  accessor,
}: StarWarsListModel) {
  if (isLoading) {
    return <Loader name="list" />;
  }

  if (error) {
    return (
      <Alert severity="error">
        An error occurred while retrieving the list. Please try again later.
      </Alert>
    );
  }

  return (
    <List>
      {items.map((item: Item) => (
        <ListItemButton
          component={Link}
          to={link.replace(":itemId", item.id)}
          key={item.id}
        >
          <ListItemText primary={item[accessor]} />
        </ListItemButton>
      ))}
    </List>
  );
}

export default StarWarsList;
