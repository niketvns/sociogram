import {AllPosts, CreatePost, Sidebar, Suggestions} from "../components/index.js";

const Bookmarks = () => {
    return (
        <div className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                <AllPosts/>
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default Bookmarks;