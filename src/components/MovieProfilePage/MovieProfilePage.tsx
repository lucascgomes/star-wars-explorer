import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchMovieProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

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
  let { movieId } = useParams();

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "movieProfileReducer"
  );

  useEffect(() => {
    if (fetchProfile && movieId) {
      fetchProfile(`https://swapi.dev/api/films/${movieId}`, {
        beginFetch,
        fetchSuccess,
        fetchError,
      });
    }
  }, [fetchProfile, movieId]);

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
