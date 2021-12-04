import React from "react";
import { Routes, Route } from "react-router-dom";
import NagivationLayout from "../NagivationLayout";
import HomePage from "../HomePage";
import PeopleListPage from "../PeopleListPage";
import PersonPage from "../PersonPage";
import MoviesListPage from "../MoviesListPage";
import PlanetsListPage from "../PlanetsListPage";
import NoMatchPage from "../NoMatchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NagivationLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/people" element={<PeopleListPage />} />
        <Route path="/people/:personId" element={<PersonPage />} />
        <Route path="/movies" element={<MoviesListPage />} />
        <Route path="/planets" element={<PlanetsListPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
