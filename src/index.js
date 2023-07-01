import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {AuthProvider, AlertsProvider, PostsProvider, UsersProvider, BookmarksProvider, LikedProvider} from "./contexts";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ChakraProvider>
                <AlertsProvider>
                    <AuthProvider>
                        <PostsProvider>
                            <UsersProvider>
                                <BookmarksProvider>
                                    <App/>
                                </BookmarksProvider>
                            </UsersProvider>
                        </PostsProvider>
                    </AuthProvider>
                </AlertsProvider>
            </ChakraProvider>
        </Router>
    </React.StrictMode>,
)
