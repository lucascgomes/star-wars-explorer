import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPlanetProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

const FIELDS = [
  {
    id: "terrain",
    label: "Terrain",
  },
  {
    id: "population",
    label: "Population",
  },
  {
    id: "climate",
    label: "Climate",
  },
  {
    id: "diameter",
    label: "Diameter",
  },
];

function PlanetProfilePage() {
  const { profileId } = useParams();

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "planetProfileReducer"
  );

  useEffect(() => {
    if (fetchProfile && profileId) {
      fetchProfile(`https://swapi.dev/api/planets/${profileId}`, {
        beginFetch,
        fetchSuccess,
        fetchError,
      });
    }
  }, [fetchProfile, profileId]);

  return (
    <div>
      <StarWarsProfile
        fields={FIELDS}
        isLoading={isLoading}
        error={error}
        data={data}
        title={data.name}
      />
    </div>
  );
}

export default PlanetProfilePage;
