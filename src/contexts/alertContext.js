import {createContext, useContext} from "react";
import {useToast} from "@chakra-ui/react";

const alertsContext = createContext()

const AlertsProvider = ({children}) =>{
    const toast = useToast()

    const getAlert = (status, title, discription) => toast({
        title: title,
        description: discription,
        status: status,
        duration: 2000,
        isClosable: true,
        variant: 'left-accent'
    })


    return(
        <alertsContext.Provider value={{getAlert}}>
            {children}
        </alertsContext.Provider>
    )
}

const useGlobalAlerts = () => useContext(alertsContext);

export {AlertsProvider, useGlobalAlerts}