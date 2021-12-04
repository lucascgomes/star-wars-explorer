import React, { useEffect } from "react";
import useListApi from "../../hooks/useListApi";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPeopleListSlice";
import StarWarsList from "../StarWarsList";

function PeopleListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListApi("peopleListReducer");

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
