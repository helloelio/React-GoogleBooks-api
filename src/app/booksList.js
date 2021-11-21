import _ from 'lodash'

const defaultState = {
    books: []
}

export const booksList = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return {...state, books: action.payload}
            break;
        case 'GET_FILTER_BOOKS':
            return {...state, books: action.payload.data}
            break;
        default:
            return {...state}
    }
}