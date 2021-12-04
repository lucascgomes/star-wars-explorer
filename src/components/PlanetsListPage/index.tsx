import React, { useEffect } from "react";
import useListFetch from "../../hooks/useListFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPlanetsListSlice";
import StarWarsList from "../StarWarsList";

function PlanetsListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListFetch("planetsListReducer");

  useEffect(() => {
    fetchList("https://swapi.dev/api/planets", {
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
        link="/planets/:itemId"
        accessor="name"
      />
    </div>
  );
}

export default PlanetsListPage;
