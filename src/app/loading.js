const defaultState = {
  load: false,
};

const GET_LOAD = 'GET_LOAD';

export const setLoadingState = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LOAD:
      return { ...state, load: action.payload };
    default:
      return { ...state };
  }
};

export const loadingAction = payload => ({ type: GET_LOAD, payload });
