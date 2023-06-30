import profile from "../images/niket_img.png";
import {AiFillHeart, AiOutlineShareAlt, AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {BsBookmarksFill, BsBookmarkPlus} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import CommentBox from "./CommentBox";
import {useEffect, useRef, useState} from "react";
import {useGlobalAuth, useGlobalBookmarks, useGlobalLiked, useGlobalPosts, useGlobalUsers} from "../contexts";
import ShareModel from "./ShareModel";
import {CreatePostModel} from "./index";

const PostCard = ({post}) => {
    const [isPostModel, setIsPostModel] = useState(false)
    const [isCreatePostModel, setIsCreatePostModel] = useState(false)
    const [isCommentModel, setIsCommentModel] = useState(false)
    const [isShareModel, setIsShareModel] = useState(false)
    const {_id, comments, content, likes, mediaURL, updatedAt, username} = post
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const {addToBookmarks, removeFromBookmarks, isInBookmarks} = useGlobalBookmarks()
    const {deletePost} = useGlobalPosts()
    const {addToLikes, removeFromLikes} = useGlobalLiked()
    const userData = findUser(username);
    const navigate = useNavigate()
    const isPostModelRef = useRef()

    useEffect(() => {
        const handleModel = (e) => {
            if (isPostModelRef.current) {
                if (!isPostModelRef.current.contains(e.target)) {
                    setIsPostModel(false)
                }
            }
        }
        document.addEventListener('mousedown', handleModel)
    }, [])

    return (
        <>
            <div className={'postcard bg-secondary relative rounded-lg p-4 flex flex-col gap-3'}>
                {
                    userDetails._id === userData._id &&
                    <div ref={isPostModelRef} className="hamburger absolute top-4 right-8 text-sociogram">
                        <HiOutlineDotsHorizontal className={'text-2xl cursor-pointer'} onClick={()=> setIsPostModel(prevState => !prevState) }/>
                        {
                            isPostModel &&
                            <div className="post-edit-menu select-none absolute top-6 text-lg rounded-lg right-2 bg-secondary border-2 border-black/40 dark:border-white/40">
                                <div className="edit px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition" onClick={()=>setIsCreatePostModel(true)}>Edit</div>
                                <hr/>
                                <div className="delete px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition" onClick={()=>deletePost(post._id)}>Delete</div>
                            </div>
                        }
                    </div>
                }
                <div className="user flex items-center gap-2">
                    <div className="profile cursor-pointer" onClick={() => navigate(`/user/${username}`)}>
                        <img src={userData?.avatarUrl} alt="profile"
                             className={'w-8 rounded-full aspect-square object-cover'}/>
                    </div>
                    <div className="user-details cursor-pointer" onClick={() => navigate(`/user/${username}`)}>
                        <p className={'text-sociogram'}>{userData?.firstName} {userData?.lastName}</p>
                        <p className={'text-sm text-black/40 dark:text-white/40'}>@{username}</p>
                    </div>
                </div>
                <div className="text-lg whitespace-pre-line text-sociogram cursor-pointer pl-2" onClick={() => navigate(`/post/${_id}`)}>
                    {content}
                </div>
                <div className="post-media cursor-pointer" onClick={() => navigate(`/post/${_id}`)}>
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
                <div className="post-options flex justify-between items-center text-2xl px-2 text-sociogram">
                    <div className="left flex gap-4 items-center">
                        <div className="like cursor-pointer">
                            {
                                likes.likeCount ?
                                    <div className={'flex items-center gap-1'} onClick={() => addToLikes(_id)}>
                                        <AiFillHeart className={'text-red-500'}/>
                                        <span className={'text-sm'}>{likes.likeCount}</span>
                                    </div> :
                                    <div className={'flex items-center gap-1'} onClick={() => addToLikes(_id)}>
                                        <AiOutlineHeart/>
                                        <span className={'text-sm'}>{likes.likeCount}</span>
                                    </div>
                            }
                        </div>
                        <div className="comment cursor-pointer flex items-center gap-2"
                             onClick={() => setIsCommentModel(true)}>
                            <FaRegCommentDots/>
                            <span className={'text-sm'}>{comments?.length}</span>
                        </div>
                        {isCommentModel && <CommentBox setIsCommentModel={setIsCommentModel}/>}
                        <div className="share cursor-pointer" onClick={() => setIsShareModel(true)}>
                            <AiOutlineShareAlt/>
                        </div>
                        {isShareModel && <ShareModel setIsShareModel={setIsShareModel} postId={_id}/>}
                    </div>
                    <div className="right">
                        <div className="bookmarks cursor-pointer">
                            {
                                isInBookmarks(_id) ?
                                    <BsBookmarksFill onClick={() => removeFromBookmarks(_id)}/> :
                                    <BsBookmarkPlus onClick={() => addToBookmarks(_id)}/>
                            }
                        </div>
                    </div>
                </div>
                <div
                    className="like-comment-overview flex gap-2 items-center text-sm cursor-pointer text-black/60 dark:text-white/60 hover:underline">
                    <div className="images flex">
                        <img src={profile} alt="p" className={'w-3 rounded-full'}/>
                    </div>
                    Liked by Ashutosh and 556 others
                </div>
            </div>
            {isCreatePostModel && <CreatePostModel isEdit={true} editPostData={post} setIsCreatePostModel={setIsCreatePostModel}/>}
        </>
    );
};

export default PostCard;