import {AllPosts, CreatePost, Sidebar, SkeletonLoader, Suggestions} from "../components/index.js";
import {useGlobalPosts} from "../contexts";
import {useEffect, useState} from "react";
import {MdPersonAddAlt1} from 'react-icons/md'
import {SortPosts} from "../components";

const Home = () => {
    const [isSortMenu, setIsSortMenu] = useState(false)
    const {isPostLoading} = useGlobalPosts()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'Home | Sociogram'
    }, [])

    return (
        <div
            className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <CreatePost/>
                {/*sorting*/}
                <SortPosts isSortMenu={isSortMenu} setIsSortMenu={setIsSortMenu}/>

                {/*Posts*/}
                {
                    isPostLoading ?
                        <SkeletonLoader/> :
                        <AllPosts/>
                }
            </div>
            {/*Suggestions*/}
            <Suggestions/>

            {/*Add User Icon*/}
            <div className="add md:hidden fixed bottom-20 text-white dark:text-black bg-black/80 dark:bg-white/80 rounded-full p-2 right-4 sm:right-auto sm:left-4 text-2xl cursor-pointer">
                <MdPersonAddAlt1/>
            </div>
        </div>
    );
};

export default Home;