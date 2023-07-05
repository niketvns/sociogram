import {AiFillHeart, AiOutlineShareAlt, AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {BsBookmarksFill, BsBookmarkPlus} from 'react-icons/bs'
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {useNavigate} from "react-router-dom";
import CommentBox from "./CommentBox";
import React, {useEffect, useRef, useState} from "react";
import {useGlobalAuth, useGlobalBookmarks, useGlobalPosts, useGlobalUsers} from "../contexts";
import ShareModel from "./ShareModel";
import {CreatePostModel} from "./index";
import FollowModel from "./FollowModel";

const PostCard = ({post}) => {
    const [isPostModel, setIsPostModel] = useState(false)
    const [isLikedByModel, setIsLikedByModel] = useState(false)
    const [isCreatePostModel, setIsCreatePostModel] = useState(false)
    const [isCommentModel, setIsCommentModel] = useState(false)
    const [isShareModel, setIsShareModel] = useState(false)
    const {_id, comments, content, likes, mediaURL, createdAt, username} = post
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const {addToBookmarks, removeFromBookmarks, isInBookmarks} = useGlobalBookmarks()
    const {deletePost, addToLikes, removeFromLikes, isInLiked} = useGlobalPosts()
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
            <div className={'postcard bg-secondary relative rounded p-4 flex flex-col gap-3'}>
                {
                    userDetails._id === userData._id &&
                    <div ref={isPostModelRef} className="hamburger absolute top-4 right-8 text-sociogram select-none">
                        <HiOutlineDotsHorizontal className={'text-2xl cursor-pointer'}
                                                 onClick={() => setIsPostModel(prevState => !prevState)}/>
                        {
                            isPostModel &&
                            <div
                                className="post-edit-menu select-none absolute top-6 rounded right-2 bg-secondary border-2 border-black/20 dark:border-white/20 z-10">
                                <div
                                    className="edit px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition border-b flex gap-2 items-center"
                                    onClick={() => setIsCreatePostModel(true)}
                                >
                                    <BiEdit />Edit
                                </div>
                                <div
                                    className="delete px-6 py-2 cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 transition flex gap-2 items-center"
                                    onClick={() => deletePost(post._id)}
                                >
                                    <MdDelete /> Delete
                                </div>
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
                    <div className="post-date text-black/30 dark:text-white/30 self-start">
                        <p>• {new Date(createdAt).toDateString().split(" ").slice(1, 4).join(" ")}</p>
                        {
                            post?.isEdited &&
                            <p className="edited text-[12px] ml-2 text-black/30 dark:text-white/30">
                                (edited)
                            </p>
                        }
                    </div>
                </div>
                <div className="content-tags">
                    <div className="text-lg whitespace-pre-line text-sociogram cursor-pointer pl-2"
                         onClick={() => navigate(`/post/${_id}`)}>
                        {content}
                    </div>
                    {
                        post?.hashTags?.length &&
                        <div className="text-sm whitespace-pre-line text-blue-500 cursor-pointer pl-2 flex gap-2 items-center">
                            {
                                post?.hashTags?.map((tag, index) => (
                                    <p key={tag+index}>#{tag}</p>
                                ))
                            }
                        </div>
                    }
                </div>
                {
                    mediaURL &&
                    <div className="post-media cursor-pointer flex justify-center" onClick={() => navigate(`/post/${_id}`)}>
                        {
                            mediaURL.split("/")[4] === "image" ? (
                                <img
                                    src={mediaURL}
                                    alt={'post'}
                                    className={'max-w-full max-h-80 object-fill rounded-lg'}
                                />
                            ) : mediaURL.split("/")[4] === "video" ? (
                                <video controls className={'max-w-full max-h-80 object-fill rounded-lg'}>
                                    <source src={mediaURL}/>
                                </video>
                            ) : <img
                                src={mediaURL}
                                alt={'post'}
                                className={'max-w-full min-w-[40%] max-h-80 object-fill rounded-lg'}
                            />
                        }
                    </div>
                }
                <div className="post-options flex justify-between items-center text-2xl px-2 text-sociogram">
                    <div className="left flex gap-4 items-center">
                        <div className="like cursor-pointer">
                            {
                                isInLiked(likes?.likedBy, userDetails?._id) ?
                                    <div className={'flex items-center gap-1'} onClick={() => removeFromLikes(_id)}>
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
                        {isCommentModel && <CommentBox post={post} setIsCommentModel={setIsCommentModel}/>}

                        <div className="share cursor-pointer" onClick={() => setIsShareModel(true)}>
                            <AiOutlineShareAlt/>
                        </div>
                        {isShareModel && <ShareModel setIsShareModel={setIsShareModel} postId={_id}/>}
                    </div>
                    <div className="right">
                        <div className="bookmarks cursor-pointer">
                            {
                                isInBookmarks(_id) ?
                                    <BsBookmarksFill className={'text-button'} onClick={() => removeFromBookmarks(_id)}/> :
                                    <BsBookmarkPlus onClick={() => addToBookmarks(_id)}/>
                            }
                        </div>
                    </div>
                </div>
                {
                    likes?.likeCount ?
                        <div
                            className="like-comment-overview flex gap-2 items-center text-sm cursor-pointer text-black/60 dark:text-white/60 hover:underline" onClick={()=>setIsLikedByModel(true)}>
                            <div className="images flex">
                                <img src={likes?.likedBy[0]?.avatarUrl} alt="p" className={'w-4 aspect-square rounded-full'}/>
                            </div>
                            Liked by {isInLiked(likes?.likedBy, userDetails?._id) ? 'You' : likes?.likedBy[0]?.username === userDetails?.username ? 'You' : likes?.likedBy[0]?.username } {likes?.likeCount >= 2 ? ` and ${likes?.likeCount-1} others` : null }
                        </div> :
                        <div
                            className="like-comment-overview flex gap-2 items-center text-sm text-black/60 dark:text-white/60 pl-2">
                            No one Liked Yet
                        </div>
                }
            </div>
            {isCreatePostModel &&
                <CreatePostModel isEdit={true} editPostData={post} setIsCreatePostModel={setIsCreatePostModel}/>}

            {isLikedByModel && <FollowModel content={'Liked By'} setIsFollowModel={setIsLikedByModel} followers={likes?.likedBy}/>}
        </>
    );
};

export default PostCard;