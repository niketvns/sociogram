import React, {useEffect, useRef} from 'react';
import {MdOutlineTune} from "react-icons/md";
import {BiTrendingUp} from "react-icons/bi";
import {IoMdArrowDropup, IoMdArrowDropdown} from "react-icons/io";

const SortPosts = ({isSortMenu, setIsSortMenu, filter, setFilter}) => {
    const sortMenuRef = useRef()

    useEffect(() => {
        const handleModel = (e) => {
            if (sortMenuRef.current) {
                if (!sortMenuRef.current.contains(e.target)) {
                    setIsSortMenu(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <div className="sort text-sociogram px-4 flex items-center justify-between gap-4 select-none">
            <div className="choosen font-bold capitalize">
                {filter} Post
            </div>
            <hr className={'bg-black/10 dark:bg-white/10 h-[1px] flex-1'}/>
            <div ref={sortMenuRef} className="options relative">
                <MdOutlineTune className={'text-3xl cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 p-1 rounded'} onClick={()=>setIsSortMenu(prevState => !prevState)}/>
                {
                    isSortMenu &&
                    <div className="model bg-secondary text-sociogram border border-black/20 dark:border-white/20 rounded absolute top-[120%] right-0 z-10 flex flex-col items-start transition">
                        <p className={`cursor-pointer flex gap-2 items-center hover:bg-black/20 hover:dark:bg-white/20 transition w-full p-2 border-b border-black/20 dark:border-white/20 ${filter === 'trending' ? 'text-button' : null}`} onClick={()=> {
                            setFilter('trending')
                            setIsSortMenu(false)
                        }}><BiTrendingUp/> Trending</p>
                        <p className={`cursor-pointer flex items-center gap-2 hover:bg-black/20 hover:dark:bg-white/20 transition w-full p-2 border-b border-black/20 dark:border-white/20 ${filter === 'latest' ? 'text-button' : null}`} onClick={()=> {
                            setFilter('latest')
                            setIsSortMenu(false)
                        }}><IoMdArrowDropup/> Latest</p>
                        <p className={`cursor-pointer flex items-center gap-2 hover:bg-black/20 hover:dark:bg-white/20 transition w-full p-2 ${filter === 'oldest' ? 'text-button' : null}`} onClick={()=> {
                            setFilter('oldest')
                            setIsSortMenu(false)
                        }}><IoMdArrowDropdown/> Oldest</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SortPosts;