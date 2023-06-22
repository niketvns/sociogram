import { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, reducerFunction } from "./Reducer/reducer.js";
import axios from "axios";
import {useGlobalAlerts} from "./alertContext";

const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, initialValue);
    const {getAlert} = useGlobalAlerts()

    useEffect(() => {
        const token = localStorage.getItem('encodedToken')
        if (token) {
            const foundUser = JSON.parse(localStorage.getItem('foundUser'))
            dispatch({ type: 'LOGIN', payload: { loginToken: token, userDetails: foundUser } });
        }
    }, [])

    const loginFormChange = (e) => {
        dispatch({ type: 'LOGIN_FORM_HANDLER', payload: { name: e.target.name, value: e.target.value } })
    }

    const signupFormChange = (e) => {
        dispatch({ type: 'signupFormChange', payload: { name: e.target.name, value: e.target.value } })
    }

    const applyDummyCredential = () => {
        dispatch({ type: 'APPLY_DUMMY', payload: { username: 'niketmishra', password: 'niketmishra@123' } })
    }

    // Login Function
    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/auth/login', {
                "username": state.loginFormData.username,
                "password": state.loginFormData.password
            })
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
            dispatch({ type: 'LOGIN', payload: { loginToken: data.encodedToken, userDetails: data.foundUser } });
            getAlert('success', 'Login Successfully!', `Welcome in the Sociogram`)
        } catch (error) {
            getAlert('error', 'Error', error.message)
        }
    }

    // Signup Handler
    const signupHandler = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post('/api/auth/signup', {
                "firstName": "Rahul",
                "lastName": "Yadav",
                "username": "rahulyadav",
                "password": "rahul@123"
            })
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
            dispatch({ type: 'SIGNUP', payload: { loginToken: data.encodedToken, userDetails: data.createdUser } });
            getAlert('success', 'Authenticated', "Account Created Successfully!")
        } catch (error) {
            console.log(error)
        }
    }


    const logoutHandler = () => {
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("foundUser");
        dispatch({ type: 'LOGOUT' });
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
            userDetails: state.userDetails
        }}>
            {children}
        </authContext.Provider>
    )
}

const useGlobalAuth = () => useContext(authContext);

export { AuthProvider, useGlobalAuth }