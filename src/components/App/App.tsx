import React from "react";
import { Routes, Route } from "react-router-dom";
import NagivationLayout from "../NagivationLayout";
import HomePage from "../HomePage";
import PeopleListPage from "../PeopleListPage";
import PersonProfilePage from "../PersonProfilePage";
import MoviesListPage from "../MoviesListPage";
import MovieProfilePage from "../MovieProfilePage";
import PlanetsListPage from "../PlanetsListPage";
import PlanetProfilePage from "../PlanetProfilePage";
import NoMatchPage from "../NoMatchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NagivationLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/people" element={<PeopleListPage />} />
        <Route path="/people/:personId" element={<PersonProfilePage />} />
        <Route path="/movies" element={<MoviesListPage />} />
        <Route path="/movies/:movieId" element={<MovieProfilePage />} />
        <Route path="/planets" element={<PlanetsListPage />} />
        <Route path="/planets/:planetId" element={<PlanetProfilePage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
