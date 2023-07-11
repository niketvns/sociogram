import {AllPosts, CreatePost, PostCard, Sidebar, SkeletonLoader, Suggestions} from "../components/index.js";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {useEffect, useState} from "react";
import {MdPersonAddAlt1} from 'react-icons/md'
import {SortPosts} from "../components";

const Home = () => {
    const [isSortMenu, setIsSortMenu] = useState(false)
    const [filter, setFilter] = useState('latest')
    const {isPostLoading, posts} = useGlobalPosts()
    const {userDetails} = useGlobalAuth()
    const {isFollow} = useGlobalUsers()

    useEffect(() => {
        window.scrollTo({top: 0, left: 0});
        document.title = 'Home | Sociogram'
    }, [])

    const checkForHomePost = posts.filter(post => isFollow(post?.username) || post?.username === userDetails?.username)

    let filteredPosts = checkForHomePost

    if (filter === 'trending'){
        filteredPosts = checkForHomePost.sort((post1, post2) => post2?.likes?.likeCount - post1?.likes?.likeCount)
    } else if (filter === 'latest'){
        filteredPosts= checkForHomePost.sort((post1, post2) => new Date(post2?.createdAt) - new Date(post1?.createdAt))
    }else if (filter === 'oldest'){
        filteredPosts = checkForHomePost.sort((post1, post2) => new Date(post1?.createdAt) - new Date(post2?.createdAt))
    }

    return (
        <div
            className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 xs:p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <CreatePost/>
                {/*sorting*/}
                <SortPosts isSortMenu={isSortMenu} filter={filter} setFilter={setFilter} setIsSortMenu={setIsSortMenu}/>

                {/*Posts*/}
                {
                    isPostLoading ?
                        <SkeletonLoader/> :
                        filteredPosts.length ?
                        <div className={'all-posts flex flex-col gap-3 justify-center'}>
                            {
                                filteredPosts.map(post => <PostCard key={post._id} post={post}/>)
                            }
                        </div> :
                            <p className='text-xl font-bold text-black/40 text-center pt-5'>Follow Users to see their posts</p>
                }
            </div>
            {/*Suggestions*/}
            <Suggestions/>

            {/*Add User Icon*/}
            <div className="add md:hidden fixed bottom-20 text-white dark:text-black bg-black/80 dark:bg-white/80 rounded-full p-2 right-4 sm:right-auto sm:left-4 text-2xl cursor-pointer z-10">
                <MdPersonAddAlt1/>
            </div>
        </div>
    );
};

export default Home;