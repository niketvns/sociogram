import {createContext, useContext} from "react";

const usersContext = createContext()

const UsersProvider = ({children}) =>{



    return(
        <usersContext.Provider value={'posts'}>
            {children}
        </usersContext.Provider>
    )
}

const useGlobalUsers = () => useContext(usersContext);

export {UsersProvider, useGlobalUsers}