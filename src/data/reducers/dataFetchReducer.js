export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        status: 'fetching',
        error: null,
        data: [],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.payload,
        error: null,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        status: 'error',
        error: action.payload,
        data: [],
      };
    default:
      throw new Error();
  }
};
