const defaultState = {
    error: false,
};

const GET_ERROR = 'GET_ERROR';

export const searchError = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ERROR:
            return { ...state, error: action.payload };
        default:
            return { ...state };
    }
};

export const errorAction = payload => ({ type: GET_ERROR, payload });
