import React, { useEffect } from "react";
import useListFetch from "../../hooks/useListFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchMoviesListSlice";
import { MOVIE_PROFILE_PAGE } from "../../locations";
import StarWarsList from "../StarWarsList";

function MoviesListPage() {
  const [{ isLoading, error, data }, fetchList] =
    useListFetch("moviesListReducer");

  useEffect(() => {
    if (!data.length) {
      fetchList("https://swapi.dev/api/films", {
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
        link={MOVIE_PROFILE_PAGE}
        accessor="title"
      />
    </div>
  );
}

export default MoviesListPage;
