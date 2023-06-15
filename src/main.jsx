import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {makeServer} from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "./contexts/index.js";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </Router>
    </React.StrictMode>,
)
