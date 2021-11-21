const defaultState = {
    maxResult: 5,
    input: '',
}

export const searchParameter = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_VALUE':
            return {...state, input: action.payload}
            break;
        default:
            return {...state}
    }
}