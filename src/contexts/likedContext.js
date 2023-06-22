import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import axios from "axios";

const likedContext = createContext()

const LikedProvider = ({children}) =>{
    const [isLikesLoading, setIsLikesLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(()=>{
        fetchLikes()
    },[])

    const fetchLikes = async () => {
        const token = localStorage.getItem('encodedToken')
        setIsLikesLoading(true)
        try {
            const { data } = await axios.get(
                `/api/users/bookmark/`,
                {headers: {authorization: token}}
            )
            dispatch({ type: 'UPDATE_BOOKMARKS', payload: data.bookmarks });
        } catch (error) {
            getAlert('error', 'Error in Bookmarks', error.message)
        }finally {
            setIsLikesLoading(false)
        }
    }

    const addToBookmarks = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsLikesLoading(true)
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
            setIsLikesLoading(false)
        }
    }

    const removeFromBookmarks = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsLikesLoading(true)
        try {
            const { data } = await axios.post(
                `/api/users/remove-bookmark/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({ type: 'UPDATE_BOOKMARKS', payload: data.bookmarks });
            getAlert('warning', 'Post Removed from Bookmarks', '')
        } catch (error) {
            getAlert('error', 'R -> Error in Bookmarks', error.message)
        }finally {
            setIsLikesLoading(false)
        }
    }

    const isInBookmarks = (id) => {
        return state.bookmarks?.find(post => post._id === id)
    }

    return(
        <likedContext.Provider value={''}>
            {children}
        </likedContext.Provider>
    )
}

const useGlobalLiked = () => useContext(likedContext);

export {LikedProvider, useGlobalLiked}