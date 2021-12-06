import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPlanetProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

interface State {
  planetsListReducer: any;
}

interface Item {
  id: string;
}

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

  const dispatch = useDispatch();

  const list = useSelector((state: State) => state.planetsListReducer.data);

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "planetProfileReducer"
  );

  useEffect(() => {
    const profile = list.find((item: Item) => item.id === profileId);
    if (profile) {
      dispatch(fetchSuccess(profile));
    } else if (fetchProfile && profileId) {
      fetchProfile(`https://swapi.dev/api/planets/${profileId}`, {
        beginFetch,
        fetchSuccess,
        fetchError,
      });
    }
  }, [fetchProfile, profileId, list, dispatch]);

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
