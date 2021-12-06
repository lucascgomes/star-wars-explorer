import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useProfileFetch from "../../hooks/useProfileFetch";
import {
  beginFetch,
  fetchSuccess,
  fetchError,
} from "../../reducers/fetchPersonProfileSlice";
import StarWarsProfile from "../StarWarsProfile";

interface State {
  peopleListReducer: any;
}

interface Item {
  id: string;
}

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
  const { profileId } = useParams();

  const dispatch = useDispatch();

  const list = useSelector((state: State) => state.peopleListReducer.data);

  const [{ isLoading, error, data }, fetchProfile] = useProfileFetch(
    "personProfileReducer"
  );

  useEffect(() => {
    const profile = list.find((item: Item) => item.id === profileId);
    if (profile) {
      dispatch(fetchSuccess(profile));
    } else if (fetchProfile && profileId) {
      fetchProfile(`https://swapi.dev/api/people/${profileId}`, {
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

export default PersonProfilePage;
