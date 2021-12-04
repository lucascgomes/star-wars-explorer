import { fetchSlice } from "./fetchSlice";

const fetchPeopleListSlice = fetchSlice("peopleList", []);

export const { beginFetch, fetchSuccess, fetchError } =
  fetchPeopleListSlice.actions;

export default fetchPeopleListSlice.reducer;
