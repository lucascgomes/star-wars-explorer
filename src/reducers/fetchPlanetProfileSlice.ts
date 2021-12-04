import { fetchSlice } from "./fetchSlice";

const fetchPlanetProfileSlice = fetchSlice("planetProfile", {});

export const { beginFetch, fetchSuccess, fetchError } =
  fetchPlanetProfileSlice.actions;

export default fetchPlanetProfileSlice.reducer;
