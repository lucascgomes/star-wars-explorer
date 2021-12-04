import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
      <Route path="/" element={<NagivationLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader name="Home Page" />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/people"
          element={
            <Suspense fallback={<Loader name="People List Page" />}>
              <PeopleListPage />
            </Suspense>
          }
        />
        <Route
          path="/people/:personId"
          element={
            <Suspense fallback={<Loader name="Person Profile Page" />}>
              <PersonProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<Loader name="Movies List Page" />}>
              <MoviesListPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <Suspense fallback={<Loader name="Movie Profile Page" />}>
              <MovieProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/planets"
          element={
            <Suspense fallback={<Loader name="Planets List Page" />}>
              <PlanetsListPage />
            </Suspense>
          }
        />
        <Route
          path="/planets/:planetId"
          element={
            <Suspense fallback={<Loader name="Planet Profile Page" />}>
              <PlanetProfilePage />
            </Suspense>
          }
        />
        <Route
          path="/star-wars-explorer"
          element={<Navigate to="/" replace />}
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
