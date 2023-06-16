import { createContext, useContext, useEffect, useReducer } from "react";
import { initialValue, reducerFunction } from "./Reducer/reducer.js";
import axios from "axios";

const authContext = createContext()

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, initialValue);

    useEffect(() => {
        const token = localStorage.getItem('encodedToken')
        if (token) {
            const foundUser = JSON.parse(localStorage.getItem('foundUser'))
            dispatch({ type: 'login', payload: { loginToken: token, userDetails: foundUser } });
        }
    }, [])

    const loginFormChange = (e) => {
        dispatch({ type: 'loginFormChange', payload: { name: e.target.name, value: e.target.value } })
    }

    const signupFormChange = (e) => {
        dispatch({ type: 'signupFormChange', payload: { name: e.target.name, value: e.target.value } })
    }

    // Login Function
    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post('/api/auth/login', {
                "username": "niketvns",
                "password": "niketmishra@123"
            })
            console.log(data)
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.foundUser));
            dispatch({ type: 'login', payload: { loginToken: data.encodedToken, userDetails: data.foundUser } });
            // getAlert('success', 'Login Successfully!', `Welcome in the world of Cinema`)
        } catch (error) {
            console.log(error)
        }
    }

    // Signup Handler
    const signupHandler = async (event) => {
        event.preventDefault()
        try {
            const { data } = await axios.post('/api/auth/signup', {
                "firstName": "Rahul",
                "lastName": "Yadav",
                "email": "rahulyadav@gmail.com",
                "password": "rahul@123"
            })
            localStorage.setItem("encodedToken", JSON.stringify(data.encodedToken));
            localStorage.setItem("foundUser", JSON.stringify(data.createdUser));
            dispatch({ type: 'signup', payload: { loginToken: data.encodedToken, userDetails: data.createdUser } });
            // getAlert('success', 'Authenticated', "Account Created Successfully!")
        } catch (error) {
            console.log(error)
        }
    }


    const logoutHandler = () => {
        localStorage.removeItem("encodedToken");
        localStorage.removeItem("foundUser");
        dispatch({ type: 'logout' });
        // getAlert('success', 'Logout successfully!', "See you soon")
    }


    return (
        <authContext.Provider value={{
            loginHandler,
            signupHandler,
            logoutHandler,
            loginFormChange,
            signupFormChange,
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