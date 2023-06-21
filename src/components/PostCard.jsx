import profile from "../images/niket_img.png";
import {AiFillHeart, AiOutlineShareAlt, AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {BsBookmarksFill} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import CommentBox from "./CommentBox";
import {useState} from "react";
import {useGlobalUsers} from "../contexts";
import ShareModel from "./ShareModel";

const PostCard = ({post}) => {
    const [isCommentModel, setIsCommentModel] = useState(false)
    const [isShareModel, setIsShareModel] = useState(false)
    const {_id, comments, content, likes, mediaURL, updatedAt, username} = post
    const {findUser} = useGlobalUsers()
    const userData = findUser(username);

    const navigate = useNavigate()

    return (
        <div className={'postcard bg-secondary rounded-lg p-4 flex flex-col gap-3'}>
            <div className="user flex items-center gap-2">
                <div className="profile cursor-pointer" onClick={()=>navigate(`/user/${username}`)}>
                    <img src={userData?.avatarUrl} alt="profile" className={'w-8 rounded-full aspect-square object-cover'}/>
                </div>
                <div className="user-details">
                    <p>{userData?.firstName} {userData?.lastName}</p>
                    <p className={'text-sm text-white/40'}>@{username}</p>
                </div>
            </div>
            <div className="text cursor-pointer" onClick={() => navigate(`/post/${_id}`)}>
                {content}
            </div>
            <div className="post-media">
                {
                    mediaURL && mediaURL.split("/")[4] === "image" ? (
                        <img
                            src={mediaURL}
                            alt={'post'}
                            className={'w-full max-h-80 object-fill rounded-lg'}
                        />
                    ) : mediaURL && (
                        <video controls className={'w-full max-h-80 object-fill rounded-lg'}>
                            <source src={mediaURL}/>
                        </video>
                    )
                }
            </div>
            <div className="post-options flex justify-between items-center text-2xl px-2">
                <div className="left flex gap-4 items-center">
                    <div className="like cursor-pointer">
                        {
                            likes.likeCount ?
                                <div className={'flex items-center gap-1'}>
                                    <AiFillHeart className={'text-red-500'}/>
                                    <span className={'text-sm'}>{likes.likeCount}</span>
                                </div> :
                                <div className={'flex items-center gap-1'}>
                                    <AiOutlineHeart />
                                    <span className={'text-sm'}>{likes.likeCount}</span>
                                </div>
                        }

                    </div>
                    <div className="comment cursor-pointer flex items-center gap-2"
                         onClick={() => setIsCommentModel(true)}>
                        <FaRegCommentDots/>
                        <span className={'text-sm'}>{comments.length}</span>
                    </div>
                    {isCommentModel && <CommentBox setIsCommentModel={setIsCommentModel}/>}
                    <div className="share cursor-pointer" onClick={()=>setIsShareModel(true)}>
                        <AiOutlineShareAlt/>
                    </div>
                    {isShareModel && <ShareModel setIsShareModel={setIsShareModel} postId={_id}/>}
                </div>
                <div className="right">
                    <div className="bookmarks cursor-pointer">
                        <BsBookmarksFill/>
                    </div>
                </div>
            </div>
            <div
                className="like-comment-overview flex gap-2 items-center text-sm cursor-pointer text-white/60 hover:underline">
                <div className="images flex">
                    <img src={profile} alt="p" className={'w-3 rounded-full'}/>
                </div>
                Liked by Ashutosh and 556 others
            </div>
        </div>
    );
};

export default PostCard;