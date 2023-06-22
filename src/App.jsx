import './App.css'
import {BackToTop, Footer, RequireAuth} from "./components";
import Mockman from "mockman-js";
import {Route, Routes} from "react-router-dom";
import {Bookmarks, Error, Explore, Home, Liked, Login, PostDetails, Profile, Signup} from "./pages";

function App() {
    return (
        <div className={'app-main bg-sociogram min-h-[100vh] text-white pb-8 sm:pb-0'}>
            <Routes>
                <Route path={'/'} element={
                    <RequireAuth>
                        <Home/>
                    </RequireAuth>
                }/>
                <Route path={'/post/:id'} element={
                    <RequireAuth>
                        <PostDetails/>
                    </RequireAuth>
                }/>
                <Route path={'/user/explore'} element={
                    <RequireAuth>
                        <Explore/>
                    </RequireAuth>
                }/>
                <Route path={'/user/bookmarks'} element={
                    <RequireAuth>
                        <Bookmarks/>
                    </RequireAuth>
                }/>
                <Route path={'/user/likes'} element={
                    <RequireAuth>
                        <Liked/>
                    </RequireAuth>
                }/>
                <Route path={'/user/:username'} element={
                    <RequireAuth>
                        <Profile/>
                    </RequireAuth>
                }/>
                <Route path={'/authentication/login'} element={<Login/>}/>
                <Route path={'/authentication/signup'} element={<Signup/>}/>
                <Route path={'/testing/mockman'} element={<Mockman/>}/>
                <Route path={'*'} element={<Error/>}/>
            </Routes>
            <Footer/>
            <BackToTop/>
        </div>
    )
}

export default App
