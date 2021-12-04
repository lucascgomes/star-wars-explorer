import { configureStore } from "@reduxjs/toolkit";
import movieProfileReducer from "./reducers/fetchMovieProfileSlice";
import moviesListReducer from "./reducers/fetchMoviesListSlice";
import peopleListReducer from "./reducers/fetchPeopleListSlice";
import personProfileReducer from "./reducers/fetchPersonProfileSlice";
import planetProfileReducer from "./reducers/fetchPlanetProfileSlice";
import planetsListReducer from "./reducers/fetchPlanetsListSlice";

export default configureStore({
  reducer: {
    movieProfileReducer,
    moviesListReducer,
    peopleListReducer,
    personProfileReducer,
    planetProfileReducer,
    planetsListReducer,
  },
});
