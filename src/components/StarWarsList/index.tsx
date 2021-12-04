import React from "react";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import LinkButton from "../LinkButton";
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
    <Stack spacing={2} justifyContent="center" alignItems="center">
      {items.map((item: Item) => (
        <LinkButton to={link.replace(":itemId", item.id)} key={item.id}>
          {item[accessor]}
        </LinkButton>
      ))}
    </Stack>
  );
}

export default StarWarsList;
