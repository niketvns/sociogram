import {createContext, useContext, useEffect, useReducer} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";

const likedContext = createContext()

const LikedProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    return(
        <likedContext.Provider value={''}>
            {children}
        </likedContext.Provider>
    )
}

const useGlobalLiked = () => useContext(likedContext);

export {LikedProvider, useGlobalLiked}