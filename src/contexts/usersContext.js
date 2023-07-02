import {createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import {initialValue, reducerFunction} from "./Reducer/reducer";
import {useGlobalAlerts} from "./alertContext";

const usersContext = createContext()

const UsersProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [isUserEditLoading, setIsUserEditLoading] = useState(false)
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

    const editUserDetails = async (user) => {
        setIsUserEditLoading(true)
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post(`/api/users/edit`,{
                userData: user
            },{headers: {authorization: token}})
            fetchAllUsers();
            dispatch({ type: 'UPDATE_USER', payload: data.user });
            localStorage.setItem("foundUser", JSON.stringify(data.user));
            getAlert('success', 'Profile Updated Successfully', '')
        } catch (error) {
            console.log(error)
        }finally {
            setIsUserEditLoading(false)
        }
    }

    const followUser = async (followUserId) => {
        const token = localStorage.getItem('encodedToken')
        try {
            const { data } = await axios.post(
                `/api/users/follow/${followUserId}`,
                {},
                {headers: {authorization: token}}
            )
            dispatch({ type: 'UPDATE_USER', payload: data.user });
            localStorage.setItem("foundUser", JSON.stringify(data.user));
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
            dispatch({ type: 'UPDATE_USER', payload: data.user });
            localStorage.setItem("foundUser", JSON.stringify(data.user));
            fetchAllUsers()
            getAlert('info', `Unfollow ${data?.followUser?.firstName}`, '')
        } catch (error) {
            getAlert('error', 'Error in Follow', error.message)
        }
    }

    const findUser = (username) => {
        return state.users.find(user => user.username === username)
    }

    const isFollow = (username) => {
        return state.userDetails?.followers?.some(user => user?.username === username) || state.userDetails?.following?.some(user => user?.username === username)
    }

    return(
        <usersContext.Provider value={{users: state.users, findUser, followUser, unfollowUser, editUserDetails, isUserEditLoading, isFollow}}>
            {children}
        </usersContext.Provider>
    )
}

const useGlobalUsers = () => useContext(usersContext);

export {UsersProvider, useGlobalUsers}