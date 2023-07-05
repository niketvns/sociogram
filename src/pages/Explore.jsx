import {AllPosts, Sidebar, Suggestions} from "../components/index.js";
import {useEffect, useState} from "react";
import {useGlobalPosts} from "../contexts";

const Explore = () => {
    const [filter, setFilter] = useState('latest')
    const {posts} = useGlobalPosts()

    useEffect(()=>{
        window.scrollTo({top: 0, left: 0});
        document.title = 'Explore | Sociogram'
    },[])

    let filteredPosts = posts

    if (filter === 'trending'){
        filteredPosts = posts.sort((post1, post2) => post2?.likes?.likeCount - post1?.likes?.likeCount)
    } else if (filter === 'latest'){
        posts.sort((post1, post2) => new Date(post2?.createdAt) - new Date(post1?.createdAt))
    }else if (filter === 'oldest'){
        posts.sort((post1, post2) => new Date(post1?.createdAt) - new Date(post2?.createdAt))
    }

    return (
        <div className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 xs:p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-6">
                <header className={'text-sociogram bg-secondary p-4 rounded flex flex-col gap-2'}>
                    <h2 className={'text-2xl font-bold'}>Explore</h2>
                    <div className="filter flex gap-4 text-sm">
                        <p className={`rounded border border-black/40 dark:border-white/40 py-1 px-4 text-black/40 dark:text-white/40 cursor-pointer select-none ${filter === 'trending' ? 'text-button border-button' : null}`}
                           onClick={()=>setFilter('trending')}
                        >Trending</p>
                        <p className={`rounded border border-black/40 dark:border-white/40 py-1 px-4 text-black/40 dark:text-white/40 cursor-pointer select-none ${filter === 'latest' ? 'text-button border-button' : null}`}
                           onClick={()=>setFilter('latest')}
                        >Latest</p>
                        <p className={`rounded border border-black/40 dark:border-white/40 py-1 px-4 text-black/40 dark:text-white/40 cursor-pointer select-none ${filter === 'oldest' ? 'text-button border-button' : null}`}
                           onClick={()=>setFilter('oldest')}
                        >Oldest</p>
                    </div>
                </header>
                <AllPosts posts={filteredPosts}/>
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default Explore;