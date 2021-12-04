import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

interface StateModel {
  [key: string]: any;
}

interface ActionModel {
  beginFetch: Function;
  fetchSuccess: Function;
  fetchError: Function;
}

const fetchProfile =
  (dispatch: Function) => (api: string, actions: ActionModel) => {
    const { beginFetch, fetchSuccess, fetchError } = actions;
    dispatch(beginFetch());
    fetch(api)
      .then((response) => response.json())
      .then((data) => dispatch(fetchSuccess(data)))
      .catch((error) => dispatch(fetchError(error)));
  };

const useProfileFetch = (name: string) => {
  const slice = useSelector((state: StateModel) => state[name]);
  const dispatch = useDispatch();
  const fetchProfileMemo = useMemo(() => fetchProfile(dispatch), [dispatch]);

  return [slice, fetchProfileMemo];
};

export default useProfileFetch;
