export const initialValue = {
    loginToken: null,
    userDetails: null,
    allPosts: [],
    likes: [],
    bookmarks: [],
    users: [],
    loginFormData: {username: '', password: ''}
}

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, loginToken: action.payload.loginToken, userDetails: action.payload.userDetails, loginFormData: {username: '', password: ''}}
        case 'SIGNUP':
            return {...state, loginToken: action.payload.loginToken, userDetails: action.payload.userDetails}
        case 'LOGOUT':
            return { ...state, loginToken: null, userDetails: null }
        case 'UPDATE_POST':
            return {...state, allPosts: action.payload}
        case 'UPDATE_BOOKMARKS':
            return {...state, bookmarks: action.payload}
        case 'UPDATE_USERS':
            return {...state, users: action.payload}
        case 'LOGIN_FORM_HANDLER':
            return {...state, loginFormData: {...state.loginFormData, [action.payload.name]: action.payload.value }}
        case 'APPLY_DUMMY':
            return {...state, loginFormData: action.payload}
        default:
            return state;
    }
}