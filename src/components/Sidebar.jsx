import {AiFillHome, AiFillPlusCircle, AiFillHeart} from 'react-icons/ai'
import {MdExplore} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            className={'sidebar-main fixed sm:sticky sm:mt-10 md:mt-0 sm:top-28 sm:rounded-lg bottom-0 bg-secondary border-t-[0.5px] border-white/10 lg:pt-0 lg:sticky'}>
            <div
                className={'sidebar w-[100vw] text-lg flex justify-between sm:flex-col sm:w-auto sm:p-0 sm:py-1 sm:min-h-[40vh] lg:min-h-[30vh] sm:gap-2'}>
                <NavLink to={'/'}
                         className="home sm:border-l-4 sm:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5 sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-white/5 transition">
                    <AiFillHome className={'m-2'}/>
                    <span className={'hidden lg:block'}>Home</span>
                </NavLink>
                <NavLink to={'/user/explore'}
                         className="explore sm:border-l-4 sm:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5  sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-white/5 transition">
                    <MdExplore className={'m-2'}/>
                    <span className={'hidden lg:block'}>Explore</span>
                </NavLink>
                <NavLink to={'/user/bookmarks'}
                         className="bookmarks sm:border-l-4 sm:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5  sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-white/5 transition">
                    <BsBookmarksFill className={'m-2'}/>
                    <span className={'hidden lg:block'}>Bookmarks</span>
                </NavLink>
                <NavLink to={'/user/likes'}
                         className="likes sm:border-l-4 sm:border-[#241e38] cursor-pointer lg:flex items-center justify-start gap-0.5  sm:p-2 lg:px-10 hover:backdrop-sepia-0 hover:bg-white/5 transition">
                    <AiFillHeart className={'m-2'}/>
                    <span className={'hidden lg:block'}>Likes</span>
                </NavLink>
            </div>
            <button
                className="create hidden sm:block bg-button text-lg w-full rounded-3xl mt-2 sm:flex items-center justify-center gap-0.5 sm:py-1">
                <AiFillPlusCircle className={'m-2'}/>
                <span className={'hidden lg:block'}>Create</span>
            </button>
        </div>
    );
};

export default Sidebar;