const defaultValue = {
    book: {},
}

const GET_BOOK = 'GET_BOOK'

export const bookItem = (state = defaultValue, action) => {
    switch (action.type) {
        case GET_BOOK:
            return {...state, book: action.payload}
        default:
            return {...state}
    }
}

export const getBookAction = (payload) => ({type: GET_BOOK, payload})
