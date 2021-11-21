const defaultState = {
    categorie: 'all',
}

export const categorieParameter = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIE':
            return {...state, categorie: action.payload}
            break;
        default:
            return {...state}

    }
}