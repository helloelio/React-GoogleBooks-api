const defaultState = {
    books: []
}

const GET_BOOKS = 'GET_BOOKS';
const GET_LOAD_BOOKS = 'GET_LOAD_BOOKS'
const GET_FILTER_BOOKS = 'GET_FILTER_BOOKS';

export const booksList = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, books: action.payload}
            break;
        case GET_FILTER_BOOKS:
            return {...state, books: action.payload.data}
            break;
        case GET_LOAD_BOOKS:
            return {...state, books: [...state.books, ...action.payload]}
        default:
            return {...state}
    }
}

export const getBooksAction = (payload) => ({type: GET_BOOKS, payload});
export const loadBooksAction = (payload) => ({type: GET_LOAD_BOOKS, payload});
export const getFilterBooksAction = (payload) => ({type:GET_FILTER_BOOKS, payload});