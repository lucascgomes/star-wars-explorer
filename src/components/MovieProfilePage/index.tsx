import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchMovieProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

interface State {
  moviesListReducer: any;
}

interface Item {
  id: string;
}

const FIELDS = [
  {
    id: "director",
    label: "Director",
  },
  {
    id: "producer",
    label: "Producer",
  },
  {
    id: "release_date",
    label: "Release Date",
  },
];

function MovieProfilePage() {
  const { profileId } = useParams();

  const dispatch = useDispatch();

  const list = useSelector((state: State) => state.moviesListReducer.data);

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "movieProfileReducer"
  );

  useEffect(() => {
    const profile = list.find((item: Item) => item.id === profileId);
    if (profile) {
      dispatch(fetchSuccess(profile));
    } else if (fetchProfile && profileId) {
      fetchProfile(`https://swapi.dev/api/films/${profileId}`, {
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
        title={data.title}
      />
    </div>
  );
}

export default MovieProfilePage;
