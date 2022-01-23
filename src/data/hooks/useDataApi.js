import { useEffect, useReducer, useRef } from 'react';
import { dataFetchReducer } from '../reducers/dataFetchReducer';

export const useDataApi = (url) => {
  const cache = useRef({});
  const [state, dispatch] = useReducer(dataFetchReducer, {
    status: 'idle',
    error: null,
    data: [],
  });

  useEffect(() => {
    let didCancel = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } else {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(
              `HTTP Error: Error ${response.status} : ${response.statusText}`
            );
          }

          const data = await response.json();
          cache.current[url] = data;

          if (!didCancel) {
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
          }
        } catch (error) {
          if (!didCancel) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
          }
        }
      }
    };
    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state];
};
