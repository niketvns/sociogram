import {PostCard} from "./index.js";

const AllPosts = ({posts}) => {

    return (
        <div className={'all-posts flex flex-col gap-3 justify-center'}>
            {
                posts.map(post => <PostCard key={post._id} post={post}/>)
            }
        </div>
);
};

export default AllPosts;
