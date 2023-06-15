import {PostCard} from "./index.js";

const AllPosts = () => {
    return (
        <div className={'all-posts flex flex-col gap-3 justify-center items-center'}>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
);
};

export default AllPosts;
