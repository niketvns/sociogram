import {PostCard} from "./index.js";
import {useGlobalPosts} from "../contexts";

const AllPosts = () => {
    const {posts} = useGlobalPosts()

    return (
        <div className={'all-posts flex flex-col gap-3 justify-center'}>
            {
                posts.map(post => <PostCard key={post._id} post={post}/>)
            }
        </div>
);
};

export default AllPosts;
