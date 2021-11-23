const defaultState = {
    sort: 'relevance',
};

const GET_SORT = 'GET_SORT';

export const sortParameter = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SORT:
            return { ...state, sort: action.payload };
        default:
            return { ...state };
    }
};

export const sortParameterAction = payload => ({ type: GET_SORT, payload });
