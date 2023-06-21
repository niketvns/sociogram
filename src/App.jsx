import './App.css'
import {RequireAuth} from "./components";
import Mockman from "mockman-js";
import {Route, Routes} from "react-router-dom";
import {Bookmarks, Error, Explore, Home, Liked, Login, PostDetails, Profile, Signup} from "./pages";

function App() {
    return (
        <div className={'app-main bg-sociogram min-h-[100vh] text-white'}>
            <Routes>
                <Route path={'/'} element={<RequireAuth/>}>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/post/:id'} element={<PostDetails/>}/>
                    <Route path={'/user/explore'} element={<Explore/>}/>
                    <Route path={'/user/bookmarks'} element={<Bookmarks/>}/>
                    <Route path={'/user/likes'} element={<Liked/>}/>
                    <Route path={'/user/profile'} element={<Profile/>}/>
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
