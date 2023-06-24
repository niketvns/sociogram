import {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";

const usersContext = createContext()

const UsersProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(()=>{
        fetchAllUsers()
    },[])

    const fetchAllUsers = async () => {
        try {
            const { data } = await axios.get('/api/users')
            dispatch({ type: 'UPDATE_USERS', payload: data.users });
        } catch (error) {
            console.log(error)
        }
    }

    const findUser = (username) => {
        return state.users.find(user => user.username === username)
    }

    const followUser = async (followUserId) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post(
                `/api/users/follow/${followUserId}`,
                {},
                {headers: {authorization: token}}
            )
            fetchAllUsers()
            getAlert('success', `Following ${data?.followUser?.firstName}`, '')
        } catch (error) {
            getAlert('error', 'Error in Follow', error.message)
        }
    }

    const unfollowUser = async (followUserId) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post(
                `/api/users/unfollow/${followUserId}`,
                {},
                {headers: {authorization: token}}
            )
            fetchAllUsers()
            getAlert('info', `Unfollow ${data?.followUser?.firstName}`, '')
        } catch (error) {
            getAlert('error', 'Error in Follow', error.message)
        }
    }


    return(
        <usersContext.Provider value={{users: state.users, findUser, followUser, unfollowUser}}>
            {children}
        </usersContext.Provider>
    )
}

const useGlobalUsers = () => useContext(usersContext);

export {UsersProvider, useGlobalUsers}