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

async function getAllPages(
  api: string,
  onSuccess: Function,
  onError: Function,
  dispatch: Function
) {
  let nextPage = api;
  let result: any[] = [];

  try {
    while (nextPage) {
      const data = await fetch(nextPage).then((response) => response.json());
      nextPage = data.next;
      result = result.concat(data.results);
    }

    dispatch(
      onSuccess(
        result.map((item: any) => ({
          ...item,
          id: item.url.match(/\/(\d+)\//)[1],
        }))
      )
    );
  } catch (exception) {
    dispatch(onError(exception));
  }
}

const fetchList =
  (dispatch: Function) => (api: string, actions: ActionModel) => {
    const { beginFetch, fetchSuccess, fetchError } = actions;
    dispatch(beginFetch());
    getAllPages(api, fetchSuccess, fetchError, dispatch);
  };

const useListFetch = (name: string) => {
  const slice = useSelector((state: StateModel) => state[name]);
  const dispatch = useDispatch();
  const fetchListMemo = useMemo(() => fetchList(dispatch), [dispatch]);

  return [slice, fetchListMemo];
};

export default useListFetch;
