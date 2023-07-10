import {PostCard, Sidebar, Suggestions} from "../components/index.js";
import {useEffect} from "react";
import {useGlobalBookmarks, useGlobalPosts} from "../contexts";
import {SkeletonLoader} from "../components";

const Bookmarks = () => {
    const {isBookmarksLoading, isInBookmarks} = useGlobalBookmarks()
    const {posts} = useGlobalPosts()

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        document.title = 'Bookmarks | Sociogram'
    },[])

    const checkInBookmarks = posts.filter(post => isInBookmarks(post?._id))

    return (
        <div className={'home-main flex gap-5 min-h-[80vh] sm:justify-start lg:justify-center items-start lg:gap-4 xs:p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <header className={'text-sociogram bg-secondary p-4 rounded flex flex-col gap-2'}>
                    <h2 className={'text-2xl font-bold'}>Bookmarks</h2>
                </header>
                <div className={'all-posts flex flex-col gap-3 justify-center'}>
                    {
                        isBookmarksLoading ?
                            <SkeletonLoader /> :
                            checkInBookmarks.length ?
                                checkInBookmarks.map(post => <PostCard key={post._id} post={post}/>) :
                                <p className={'w-full text-center text-lg sm:text-2xl text-black/40 dark:text-white/40 mt-8'}>You have not added any Bookmarks!</p>
                    }
                </div>
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default Bookmarks;