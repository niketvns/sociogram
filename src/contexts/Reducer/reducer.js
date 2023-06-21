export const initialValue = {
    loginToken: null,
    userDetails: null,
    allPosts: [],
    likes: [],
    bookmarks: [],
    users: []
}

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, loginToken: action.payload.loginToken, userDetails: action.payload.userDetails}
        case 'SIGNUP':
            return {...state, loginToken: action.payload.loginToken, userDetails: action.payload.userDetails}
        case 'LOGOUT':
            return { ...state, loginToken: null, userDetails: null }
        case 'UPDATE_POST':
            return {...state, allPosts: action.payload}
        case 'UPDATE_BOOKMARKS':
            return {...state, bookmarks: action.payload}
        default:
            return state;
    }
}