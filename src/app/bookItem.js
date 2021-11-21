const defaultValue = {
    book: {},
}

export const bookItem = (state = defaultValue, action) => {
    switch (action.type) {
        case 'GET_BOOK':
            return {...state, book: action.payload}
            break;
        default:
            return {...state}
    }
}