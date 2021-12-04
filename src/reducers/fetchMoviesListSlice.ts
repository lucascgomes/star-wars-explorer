import { fetchSlice } from "./fetchSlice";

const fetchMoviesListSlice = fetchSlice("moviesList", []);

export const { beginFetch, fetchSuccess, fetchError } =
  fetchMoviesListSlice.actions;

export default fetchMoviesListSlice.reducer;
