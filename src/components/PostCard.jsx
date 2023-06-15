import profile from "../images/niket_img.png";
import {AiFillHeart, AiOutlineShareAlt, AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {BsBookmarksFill} from 'react-icons/bs'

const PostCard = () => {
    return (
        <div className={'postcard bg-secondary rounded-lg p-4 flex flex-col gap-3'}>
            <div className="user flex items-center gap-2">
                <div className="profile">
                    <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                </div>
                <div className="user-details">
                    <p>Niket Kumar Mishra</p>
                    <p>Dubai, 15 minutes ago</p>
                </div>
            </div>
            <div className="text">
                Hello this is Niket kumar Mishra.
            </div>
            <div className="post-content">
                <img src="https://pbs.twimg.com/media/FyHs04DaQAEDV39?format=png&name=small" alt="post" className={'w-full max-h-60 object-contain rounded-lg'}/>
            </div>
            <div className="post-options flex justify-between items-center text-2xl px-2">
                <div className="left flex gap-4 items-center">
                    <div className="like cursor-pointer">
                        <AiOutlineHeart/>
                        {/*<AiFillHeart/>*/}
                    </div>
                    <div className="comment cursor-pointer">
                        <FaRegCommentDots/>
                    </div>
                    <div className="share cursor-pointer">
                        <AiOutlineShareAlt/>
                    </div>
                </div>
                <div className="right">
                    <div className="bookmarks cursor-pointer">
                        <BsBookmarksFill/>
                    </div>
                </div>
            </div>
            <div className="like-comment-overview flex gap-2 items-center text-sm cursor-pointer text-white/60 hover:underline">
                <div className="images flex">
                    <img src={profile} alt="p" className={'w-3 rounded-full'}/>
                </div>
                Liked by Ashutosh and 556 others
            </div>
        </div>
    );
};

export default PostCard;