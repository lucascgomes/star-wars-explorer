import { fetchSlice } from "./fetchSlice";

const fetchPersonProfileSlice = fetchSlice("personProfile", {});

export const { beginFetch, fetchSuccess, fetchError } =
  fetchPersonProfileSlice.actions;

export default fetchPersonProfileSlice.reducer;
