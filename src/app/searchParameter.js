const defaultState = {
    maxResult: 30,
    input: '',
};

const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';

export const searchParameter = (state = defaultState, action) => {
    switch (action.type) {
        case GET_SEARCH_VALUE:
            return { ...state, input: action.payload };
        default:
            return { ...state };
    }
};

export const getSearchValueAction = payload => ({
    type: GET_SEARCH_VALUE,
    payload,
});
