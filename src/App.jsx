import './App.css'
import {Navbar, RequireAuth} from "./components/index.js";
import Mockman from "mockman-js";
import {Route, Routes} from "react-router-dom";
import {Bookmarks, Error, Explore, Home, Liked, Login, Profile, Signup} from "./pages/index.js";

function App() {
    return (
        <div className={'app-main bg-sociogram min-h-[100vh] text-white'}>
            <Routes>
                <Route element={<RequireAuth/>}>
                    {/*<Route element={<Navbar/>}>*/}
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/user/explore'} element={<Explore/>}/>
                        <Route path={'/user/bookmarks'} element={<Bookmarks/>}/>
                        <Route path={'/user/likes'} element={<Liked/>}/>
                        <Route path={'/user/profile'} element={<Profile/>}/>
                    {/*</Route>*/}
                </Route>
                <Route path={'/authentication/login'} element={<Login/>}/>
                <Route path={'/authentication/signup'} element={<Signup/>}/>
                <Route path={'/testing/mockman'} element={<Mockman/>}/>
                <Route path={'*'} element={<Error/>}/>
            </Routes>
        </div>
    )
}

export default App
