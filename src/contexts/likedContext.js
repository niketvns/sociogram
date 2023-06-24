import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";
import axios from "axios";

const likedContext = createContext()

const LikedProvider = ({children}) =>{
    const [isLikesLoading, setIsLikesLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()


    const addToLikes = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsLikesLoading(true)
        try {
            const { data } = await axios.post(
                `/api/posts/like/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            console.log(data.posts)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('success', 'Liked', '')
        } catch (error) {
            getAlert('error', 'Error in Likes', error.message)
        }finally {
            setIsLikesLoading(false)
        }
    }

    const removeFromLikes = async (postId) => {
        const token = localStorage.getItem('encodedToken')
        setIsLikesLoading(true)
        try {
            const { data } = await axios.post(
                `/api/posts/dislike/${postId}`,
                {},
                {headers: {authorization: token}}
            )
            console.log(data)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
            getAlert('warning', 'Post Removed from Likes', '')
        } catch (error) {
            getAlert('error', 'Error in Likes', error.message)
        }finally {
            setIsLikesLoading(false)
        }
    }

    return(
        <likedContext.Provider value={{addToLikes, removeFromLikes}}>
            {children}
        </likedContext.Provider>
    )
}

const useGlobalLiked = () => useContext(likedContext);

export {LikedProvider, useGlobalLiked}