import {PostCard, Sidebar, Suggestions} from "../components/index.js";
import {useEffect} from "react";
import {useGlobalBookmarks} from "../contexts";
import {SkeletonLoader} from "../components";

const Bookmarks = () => {
    const {bookmarks, isBookmarksLoading} = useGlobalBookmarks()

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        document.title = 'Bookmarks | Sociogram'
    },[])

    return (
        <div className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <div className={'all-posts flex flex-col gap-3 justify-center'}>
                    {
                        isBookmarksLoading ?
                            <SkeletonLoader /> :
                            bookmarks.length ?
                        bookmarks.map(post => <PostCard key={post._id} post={post}/>) :
                                <p className={'w-full text-center text-2xl text-white/40 mt-8'}>Nothing in Bookmarks</p>
                    }
                </div>
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default Bookmarks;