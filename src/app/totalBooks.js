const defaultState = {
    total: ''
}

export const totalBooks = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_TOTAL':
            return {...state, total: action.payload}
            break;
        default:
            return {...state}
    }
}