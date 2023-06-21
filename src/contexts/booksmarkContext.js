import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import axios from "axios";

const bookmarksContext = createContext()

const BookmarksProvider = ({children}) =>{
    const [isBookmarksLoading, setIsBookmarksLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    const addToBookmarks = async (post) => {
        const token = localStorage.getItem('encodedToken')
        setIsBookmarksLoading(true)
        try {
            const { data } = await axios.post('/api/posts',{
                postData: post
            },{headers: {authorization: token}})
            console.log(data)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('success', 'Post Uploaded Successfully', '')
        } catch (error) {
            console.log(error)
        }finally {
            setIsBookmarksLoading(false)
        }
    }


    return(
        <bookmarksContext.Provider value={''}>
            {children}
        </bookmarksContext.Provider>
    )
}

const useGlobalBookmarks = () => useContext(bookmarksContext);

export {BookmarksProvider, useGlobalBookmarks}