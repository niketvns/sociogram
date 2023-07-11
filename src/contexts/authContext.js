import {createContext, useContext, useEffect, useReducer, useState} from "react";
import {initialValue, reducerFunction} from "./Reducer/reducer.js";
import axios from "axios";
import {useGlobalAlerts} from "./alertContext";
import {json} from "react-router-dom";

const authContext = createContext()

const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const [theme, setTheme] = useState('light')
    const {getAlert} = useGlobalAlerts()

    useEffect(() => {
        const token = localStorage.getItem('encodedToken')
        if (token) {
            const foundUser = JSON.parse(localStorage.getItem('foundUser'))
            dispatch({type: 'LOGIN', payload: {loginToken: token, userDetails: foundUser}});
        }
    }, [])

    const fetchAllUsers = async () => {
        try {
            const { data } = await axios.get('/api/users')
            dispatch({ type: 'UPDATE_USERS', payload: data.users });
            // console.log(data.users)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // const themePreference = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitcher = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        // localStorage.setItem('theme', JSON.stringify(theme === 'dark' ? 'light' : 'dark'))
    }

    const loginFormChange = (e) => {
        dispatch({type: 'LOGIN_FORM_HANDLER', payload: {name: e.target.name, value: e.target.value}})
    }

    const signupFormChange = (e) => {
        dispatch({type: 'SIGNUP_FORM_HANDLER', payload: {name: e.target.name, value: e.target.value}})
    }

    const applyDummyCredential = () => {
        dispatch({type: 'APPLY_DUMMY', payload: {username: 'niketmishra', password: 'niketmishra@123'}})
    }

    // Login Function
    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post('/api/auth/login', {
                "username": state.loginFormData.username,
                "password": state.loginFormData.password
            })
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
            dispatch({type: 'LOGIN', payload: {loginToken: data.encodedToken, userDetails: data.foundUser}});
            getAlert('success', 'Login Successfully!', `Welcome back ${data.foundUser.firstName} ${data.foundUser.lastName}`)
        } catch (error) {
            getAlert('error', 'Error', error.message)
        }
    }

    // Signup Handler
    const signupHandler = async (event) => {
        event.preventDefault()
        // console.log(state.signupFormData)
        try {
            const {data} = await axios.post('/api/auth/signup', {
                "firstName": state.signupFormData.firstName,
                "lastName": state.signupFormData.lastName,
                "username": state.signupFormData.username,
                "password": state.signupFormData.password
            })
            // console.log(data.createdUser)
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
            fetchAllUsers();
            dispatch({type: 'SIGNUP', payload: {loginToken: data.encodedToken, userDetails: data.createdUser}});
            getAlert('success', 'Signup Successfully!', "Welcome in the Sociogram")
        } catch (error) {
            console.log(error)
        }
    }


    const logoutHandler = () => {
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("foundUser");
        dispatch({type: 'LOGOUT'});
        getAlert('success', 'Logout successfully!', "See you soon")
    }


    return (
        <authContext.Provider value={{
            loginHandler,
            signupHandler,
            logoutHandler,
            loginFormChange,
            loginFormData: state.loginFormData,
            signupFormChange,
            applyDummyCredential,
            loginFormInput: state.loginFormInput,
            loginToken: state.loginToken,
            userDetails: state.userDetails,
            handleThemeSwitcher,
            theme
        }}>
            {children}
        </authContext.Provider>
    )
}

const useGlobalAuth = () => useContext(authContext);

export {AuthProvider, useGlobalAuth}