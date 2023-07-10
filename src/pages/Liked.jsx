import {PostCard, Sidebar, Suggestions} from "../components/index.js";
import {useGlobalAuth, useGlobalPosts} from "../contexts";
import {useEffect} from "react";

const Liked = () => {
    const {posts, isInLiked} = useGlobalPosts()
    const {userDetails} = useGlobalAuth()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'Likes | Sociogram'
    }, [])

    const checkInLikes = [...posts].reverse().filter(post => isInLiked(post?.likes?.likedBy, userDetails?._id))

    return (
        <div
            className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 xs:p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <header className={'text-sociogram bg-secondary p-4 rounded flex flex-col gap-2'}>
                    <h2 className={'text-2xl font-bold'}>Liked Posts</h2>
                </header>
                <div className={'all-posts flex flex-col gap-3 justify-center'}>
                    {
                        checkInLikes.length ?
                            checkInLikes.map(post => (
                                <PostCard key={post._id} post={post}/>
                            )) :
                            <p className={'w-full text-center text-2xl text-black/40 dark:text-white/40 mt-8'}>No Post Liked Yet</p>
                    }
                </div>
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default Liked;