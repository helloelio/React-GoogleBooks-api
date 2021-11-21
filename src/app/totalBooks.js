const defaultState = {
    total: ''
}

const GET_TOTAL = 'GET_TOTAL';

export const totalBooks = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TOTAL:
            return {...state, total: action.payload}
            break;
        default:
            return {...state}
    }
}

export const getTotalBooksAction = (payload) => ({type: GET_TOTAL, payload})