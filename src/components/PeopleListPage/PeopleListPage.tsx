import React, { useEffect } from "react";
import useListFetch from "../../hooks/useListFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPeopleListSlice";
import StarWarsList from "../StarWarsList";

function PeopleListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListFetch("peopleListReducer");

  useEffect(() => {
    fetchList("https://swapi.dev/api/people", {
      beginFetch,
      fetchSuccess,
      fetchError,
    });
  }, [fetchList]);

  return (
    <div>
      <StarWarsList
        isLoading={isLoading}
        error={error}
        items={data}
        link="/people/:itemId"
        accessor="name"
      />
    </div>
  );
}

export default PeopleListPage;
