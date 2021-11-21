const defaultState = {
    categorie: 'all',
}

const GET_CATEGORIE = 'GET_CATEGORIE';

export const categorieParameter = (state = defaultState, action) => {
    switch (action.type) {
        case GET_CATEGORIE:
            return {...state, categorie: action.payload}
        default:
            return {...state}

    }
}

export const getCategorieParameterAction = (payload) => ({type: GET_CATEGORIE, payload});