import React, { useEffect } from "react";
import useListFetch from "../../hooks/useListFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPeopleListSlice";
import { PERSON_PROFILE_PAGE } from "../../locations";
import StarWarsList from "../StarWarsList";

function PeopleListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListFetch("peopleListReducer");

  useEffect(() => {
    if (!data.length) {
      fetchList("https://swapi.dev/api/people", {
        beginFetch,
        fetchSuccess,
        fetchError,
      });
    }
  }, [fetchList, data]);

  return (
    <div>
      <StarWarsList
        isLoading={isLoading}
        error={error}
        items={data}
        link={PERSON_PROFILE_PAGE}
        accessor="name"
      />
    </div>
  );
}

export default PeopleListPage;
