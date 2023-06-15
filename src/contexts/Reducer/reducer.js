export const initialValue = {
    loginToken: null,
    userDetails: null,
    allPosts: [],
    likes: [],
    bookmarks: []
}

export const reducerFunction = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return { ...state }
        default:
            return state;
    }
}