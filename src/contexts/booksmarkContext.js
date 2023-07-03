import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import axios from "axios";
import bookmarks from "../pages/Bookmarks";

const bookmarksContext = createContext()

const BookmarksProvider = ({children}) =>{
    const [isBookmarksLoading, setIsBookmarksLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(()=>{
        fetchBookmarks()
    },[])

    const fetchBookmarks = async () => {
        const token = localStorage.getItem('encodedToken')
        if (token){
            setIsBookmarksLoading(true)
            try {
                const { data } = await axios.get(
                    `/api/users/bookmark/`,
                    {headers: {authorization: token}}
                )
                dispatch({ type: 'UPDATE_BOOKMARKS', payload: data.bookmarks });
            } catch (error) {
                getAlert('error', 'Error in Bookmarks', error.message)
            }finally {
                setIsBookmarksLoading(false)
            }
        }
    }

    const addToBookmarks = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsBookmarksLoading(true)
        try {
            const { data } = await axios.post(
                `/api/users/bookmark/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({ type: 'UPDATE_BOOKMARKS', payload: data.bookmarks });
            getAlert('success', 'Post Added to Bookmarks', '')
        } catch (error) {
            getAlert('error', 'Error in Bookmarks', error.message)
        }finally {
            setIsBookmarksLoading(false)
        }
    }

    const removeFromBookmarks = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsBookmarksLoading(true)
        try {
            const { data } = await axios.post(
                `/api/users/remove-bookmark/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({ type: 'UPDATE_BOOKMARKS', payload: data.bookmarks });
            getAlert('warning', 'Post Removed from Bookmarks', '')
        } catch (error) {
            getAlert('error', 'Error in Bookmarks', error.message)
        }finally {
            setIsBookmarksLoading(false)
        }
    }

    const isInBookmarks = (id) => {
        return state.bookmarks?.some(postId => postId === id)
    }


    return(
        <bookmarksContext.Provider value={{addToBookmarks, removeFromBookmarks, bookmarks: state.bookmarks, isBookmarksLoading, isInBookmarks}}>
            {children}
        </bookmarksContext.Provider>
    )
}

const useGlobalBookmarks = () => useContext(bookmarksContext);

export {BookmarksProvider, useGlobalBookmarks}