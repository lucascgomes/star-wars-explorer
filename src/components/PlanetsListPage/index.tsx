import React, { useEffect } from "react";
import useListFetch from "../../hooks/useListFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPlanetsListSlice";
import { PLANET_PROFILE_PAGE } from "../../locations";
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
        link={PLANET_PROFILE_PAGE}
        accessor="name"
      />
    </div>
  );
}

export default PlanetsListPage;
