import { fetchSlice } from "./fetchSlice";

const fetchMovieProfileSlice = fetchSlice("movieProfile", {});

export const { beginFetch, fetchSuccess, fetchError } =
  fetchMovieProfileSlice.actions;

export default fetchMovieProfileSlice.reducer;
