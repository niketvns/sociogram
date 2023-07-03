import {AiFillHome, AiFillPlusCircle, AiFillHeart} from 'react-icons/ai'
import {MdExplore} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {NavLink} from "react-router-dom";
import {CreatePostModel} from "./index";
import {useState} from "react";

const Sidebar = () => {
    const [isCreatePostModel, setIsCreatePostModel] = useState(false)

    return (
        <>
            <div
                className={'sidebar-main fixed z-10 left-0 right-0 sm:z-0 sm:sticky sm:mt-10 md:mt-0 sm:top-28 sm:rounded bottom-0 bg-secondary border-t-[0.5px] border-white/10 lg:pt-0 lg:sticky'}>
                <div
                    className={'sidebar w-[100vw] px-2 text-2xl sm:text-lg flex justify-between sm:flex-col sm:w-auto sm:p-0 sm:py-1 sm:min-h-[40vh] lg:min-h-[30vh] sm:gap-2 text-sociogram'}>
                    <NavLink to={'/'}
                             className="home sm:border-l-4 sm:border-white sm:dark:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5 p-2 sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-black/5 hover:dark:bg-white/5 transition">
                        <AiFillHome className={'m-2'}/>
                        <span className={'hidden lg:block'}>Feed</span>
                    </NavLink>
                    <NavLink to={'/user/explore'}
                             className="explore sm:border-l-4 sm:border-white sm:dark:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5 p-2 sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-black/5 hover:dark:bg-white/5 transition">
                        <MdExplore className={'m-2'}/>
                        <span className={'hidden lg:block'}>Explore</span>
                    </NavLink>
                    <button
                        className="create sm:hidden text-3xl rounded-3xl" onClick={()=>setIsCreatePostModel(true)}>
                        <AiFillPlusCircle className={'m-2'}/>
                    </button>
                    <NavLink to={'/user/bookmarks'}
                             className="bookmarks sm:border-l-4 sm:border-white sm:dark:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5 p-2 sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-black/5 hover:dark:bg-white/5 transition">
                        <BsBookmarksFill className={'m-2'}/>
                        <span className={'hidden lg:block'}>Bookmarks</span>
                    </NavLink>
                    <NavLink to={'/user/likes'}
                             className="likes sm:border-l-4 sm:border-white sm:dark:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5 p-2 sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-black/5 hover:dark:bg-white/5 transition">
                        <AiFillHeart className={'m-2'}/>
                        <span className={'hidden lg:block'}>Likes</span>
                    </NavLink>
                </div>
                <button
                    className="create hidden bg-button text-lg w-full rounded-3xl mt-2 sm:flex items-center justify-center gap-0.5 sm:py-1" onClick={()=>setIsCreatePostModel(true)}>
                    <AiFillPlusCircle className={'m-2'}/>
                    <span className={'hidden lg:block'}>Create</span>
                </button>
            </div>
            {isCreatePostModel && <CreatePostModel setIsCreatePostModel={setIsCreatePostModel}/>}
        </>
    );
};

export default Sidebar;