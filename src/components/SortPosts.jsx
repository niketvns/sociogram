import React, {useEffect, useRef} from 'react';
import {MdOutlineTune} from "react-icons/md";

const SortPosts = ({isSortMenu, setIsSortMenu}) => {
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
        <div className="sort text-sociogram px-6 flex items-center justify-between gap-4">
            <div className="choosen font-bold">
                Letest Post
            </div>
            <hr className={'bg-black/10 dark:bg-white/5 h-[1px] flex-1'}/>
            <div ref={sortMenuRef} className="options relative">
                <MdOutlineTune className={'text-3xl cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 p-1 rounded'} onClick={()=>setIsSortMenu(prevState => !prevState)}/>
                {
                    isSortMenu &&
                    <div className="model bg-secondary text-sociogram border border-black/20 dark:border-white/20 rounded absolute top-[120%] right-0 z-10 flex flex-col items-start transition">
                        <p className={'cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition w-full p-2 border-b border-black/20 dark:border-white/20'}>Trending</p>
                        <p className={'cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition w-full p-2'}>Latest</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default SortPosts;