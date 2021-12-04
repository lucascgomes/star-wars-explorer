import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPersonProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

const FIELDS = [
  {
    id: "height",
    label: "Height",
  },
  {
    id: "mass",
    label: "Mass",
  },
  {
    id: "hair_color",
    label: "Hair Color",
  },
  {
    id: "skin_color",
    label: "Skin Color",
  },
  {
    id: "eye_color",
    label: "Eye Color",
  },
  {
    id: "birth_year",
    label: "Birth Year",
  },
  {
    id: "gender",
    label: "Gender",
  },
];

function PersonProfilePage() {
  let { personId } = useParams();

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "personProfileReducer"
  );

  useEffect(() => {
    if (fetchProfile && personId) {
      fetchProfile(`https://swapi.dev/api/people/${personId}`, {
        beginFetch,
        fetchSuccess,
        fetchError,
      });
    }
  }, [fetchProfile, personId]);

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

export default PersonProfilePage;
