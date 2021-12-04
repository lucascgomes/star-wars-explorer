import React, { useEffect } from "react";
import useListApi from "../../hooks/useListApi";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchMoviesListSlice";
import StarWarsList from "../StarWarsList";

function MoviesListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListApi("moviesListReducer");

  useEffect(() => {
    fetchList("https://swapi.dev/api/films", {
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
        link="/movies/:itemId"
        accessor="title"
      />
    </div>
  );
}

export default MoviesListPage;
