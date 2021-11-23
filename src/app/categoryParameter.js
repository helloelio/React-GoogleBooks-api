const defaultState = {
    category: 'all',
};

const GET_CATEGORY = 'GET_CATEGORY';

export const categoryParameter = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return { ...state, category: action.payload };
        default:
            return { ...state };
    }
};

export const getCategorieParameterAction = payload => ({
    type: GET_CATEGORY,
    payload,
});
