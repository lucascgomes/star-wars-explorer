import { configureStore } from "@reduxjs/toolkit";
import fetchMovieProfileReducer from "./reducers/fetchMovieProfileSlice";
import fetchMoviesListReducer from "./reducers/fetchMoviesListSlice";
import fetchPeopleListReducer from "./reducers/fetchPeopleListSlice";
import fetchPersonProfileReducer from "./reducers/fetchPersonProfileSlice";
import fetchPlanetProfileReducer from "./reducers/fetchPlanetProfileSlice";
import fetchPlanetsListReducer from "./reducers/fetchPlanetsListSlice";

export default configureStore({
  reducer: {
    fetchMovieProfileReducer,
    fetchMoviesListReducer,
    fetchPeopleListReducer,
    fetchPersonProfileReducer,
    fetchPlanetProfileReducer,
    fetchPlanetsListReducer,
  },
});
