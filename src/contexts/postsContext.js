import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";

const postsContext = createContext()

const PostsProvider = ({children}) =>{
    const [isPostLoading, setIsPostLoading] = useState(false)
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(()=>{
        fetchAllPosts();
    },[])

    const fetchAllPosts = async () => {
        setIsPostLoading(true)
        try {
            const { data } = await axios.get('/api/posts')
            console.log(data.posts)
            dispatch({ type: 'UPDATE_POST', payload: data.posts });
        } catch (error) {
            console.log(error)
        }finally {
            setIsPostLoading(false)
        }
    }

    return(
        <postsContext.Provider value={{posts: state.allPosts, isPostLoading, setIsPostLoading}}>
            {children}
        </postsContext.Provider>
    )
}

const useGlobalPosts = () => useContext(postsContext);

export {PostsProvider, useGlobalPosts}