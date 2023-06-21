import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";

const usersContext = createContext()

const UsersProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);

    const fetchAllUsers = async () => {
        try {
            const { data } = await axios.get('/api/users')
            console.log(data.users)
            dispatch({ type: 'UPDATE_USERS', payload: data.users });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

    const findUser = (username) => {
        return state.users.find(user => user.username === username)
    }


    return(
        <usersContext.Provider value={{users: state.users, findUser}}>
            {children}
        </usersContext.Provider>
    )
}

const useGlobalUsers = () => useContext(usersContext);

export {UsersProvider, useGlobalUsers}