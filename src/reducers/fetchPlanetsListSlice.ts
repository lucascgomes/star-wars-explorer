import { fetchSlice } from "./fetchSlice";

const fetchPlanetsListSlice = fetchSlice("planetsList", []);

export const { beginFetch, fetchSuccess, fetchError } =
  fetchPlanetsListSlice.actions;

export default fetchPlanetsListSlice.reducer;
