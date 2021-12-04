import React, { useEffect } from "react";
import useListApi from "../../hooks/useListApi";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPlanetsListSlice";
import StarWarsList from "../StarWarsList";

function PlanetsListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListApi("planetsListReducer");

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
