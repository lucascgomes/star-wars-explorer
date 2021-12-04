import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  INDEX,
  PEOPLE_LIST_PAGE,
  PERSON_PROFILE_PAGE,
  MOVIES_LIST_PAGE,
  MOVIE_PROFILE_PAGE,
  PLANETS_LIST_PAGE,
  PLANET_PROFILE_PAGE,
} from "../../locations";
import NagivationLayout from "../NagivationLayout";
import Loader from "../Loader";

const HomePage = lazy(() => import("../HomePage"));
const PeopleListPage = lazy(() => import("../PeopleListPage"));
const PersonProfilePage = lazy(() => import("../PersonProfilePage"));
const MoviesListPage = lazy(() => import("../MoviesListPage"));
const MovieProfilePage = lazy(() => import("../MovieProfilePage"));
const PlanetsListPage = lazy(() => import("../PlanetsListPage"));
const PlanetProfilePage = lazy(() => import("../PlanetProfilePage"));
const NoMatchPage = lazy(() => import("../NoMatchPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={INDEX} replace />} />
      <Route path={INDEX} element={<NagivationLayout />}>
        <Route
          path={INDEX}
          element={
            <Suspense fallback={<Loader name="Home Page" />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={PEOPLE_LIST_PAGE}
          element={
            <Suspense fallback={<Loader name="People List Page" />}>
              <PeopleListPage />
            </Suspense>
          }
        />
        <Route
          path={PERSON_PROFILE_PAGE}
          element={
            <Suspense fallback={<Loader name="Person Profile Page" />}>
              <PersonProfilePage />
            </Suspense>
          }
        />
        <Route
          path={MOVIES_LIST_PAGE}
          element={
            <Suspense fallback={<Loader name="Movies List Page" />}>
              <MoviesListPage />
            </Suspense>
          }
        />
        <Route
          path={MOVIE_PROFILE_PAGE}
          element={
            <Suspense fallback={<Loader name="Movie Profile Page" />}>
              <MovieProfilePage />
            </Suspense>
          }
        />
        <Route
          path={PLANETS_LIST_PAGE}
          element={
            <Suspense fallback={<Loader name="Planets List Page" />}>
              <PlanetsListPage />
            </Suspense>
          }
        />
        <Route
          path={PLANET_PROFILE_PAGE}
          element={
            <Suspense fallback={<Loader name="Planet Profile Page" />}>
              <PlanetProfilePage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader name="Page" />}>
              <NoMatchPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
