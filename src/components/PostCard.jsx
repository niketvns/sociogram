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
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const {addToBookmarks, removeFromBookmarks, isInBookmarks} = useGlobalBookmarks()
    const {deletePost, addToLikes, removeFromLikes, isInLiked} = useGlobalPosts()
    const userData = findUser(post?.username);
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
                    userDetails?._id === userData?._id &&
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
                                    onClick={() => deletePost(post?._id)}
                                >
                                    <MdDelete /> Delete
                                </div>
                            </div>
                        }
                    </div>
                }
                <div className="user flex items-center gap-2">
                    <div className="profile cursor-pointer" onClick={() => navigate(`/user/${post?.username}`)}>
                        {
                            userData?.avatarUrl ?
                                <img src={userData?.avatarUrl} alt="profile"
                                     className={'w-8 rounded-full aspect-square object-cover'}/>
                                :
                                <div className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer bg-black/40 dark:bg-white/40 flex items-center justify-center text-lg font-bold text-white'}>
                                    {(userData ?? userDetails)?.firstName.slice(0,1).toUpperCase()}
                                </div>
                        }
                    </div>
                    <div className="user-details cursor-pointer" onClick={() => navigate(`/user/${post?.username}`)}>
                        <p className={'text-sociogram'}>{userData?.firstName} {userData?.lastName}</p>
                        <p className={'text-sm text-black/40 dark:text-white/40'}>@{post?.username}</p>
                    </div>
                    <div className="post-date text-black/30 dark:text-white/30 self-start">
                        <p>• {new Date(post?.createdAt).toDateString().split(" ").slice(1, 4).join(" ")}</p>
                        {
                            post?.isEdited &&
                            <p className="edited text-[12px] ml-2 text-black/30 dark:text-white/30">
                                (edited)
                            </p>
                        }
                    </div>
                </div>
                <div className="content-tags  sm:pl-8">
                    <div className="text-lg whitespace-pre-line text-sociogram cursor-pointer"
                         onClick={() => navigate(`/post/${post?._id}`)}>
                        {post?.content}
                    </div>
                    {
                        post?.hashTags?.length ?
                        <div className="text-sm whitespace-pre-line text-blue-500 cursor-pointer pl-2 flex gap-2 items-center">
                            {
                                post?.hashTags?.map((tag, index) => (
                                    tag && <p key={tag+index}>#{tag}</p>
                                ))
                            }
                        </div> : null
                    }
                </div>
                {
                    post?.mediaURL &&
                    <div className="post-media cursor-pointer flex justify-start sm:pl-8" onClick={() => navigate(`/post/${post?._id}`)}>
                        {
                            post?.mediaURL.split("/")[4] === "image" ? (
                                <img
                                    src={post?.mediaURL}
                                    alt={'post'}
                                    className={'max-w-full max-h-80 object-fill rounded-lg'}
                                />
                            ) : post?.mediaURL.split("/")[4] === "video" ? (
                                <video controls className={'max-w-full max-h-80 object-fill rounded-lg'}>
                                    <source src={post?.mediaURL}/>
                                </video>
                            ) : <img
                                src={post?.mediaURL}
                                alt={'post'}
                                className={'max-w-full min-w-[40%] max-h-80 object-fill rounded-lg'}
                            />
                        }
                    </div>
                }
                <div className="post-options flex justify-between items-center text-2xl px-2 sm:pl-8 text-sociogram">
                    <div className="left flex gap-4 items-center">
                        <div className="like cursor-pointer">
                            {
                                isInLiked(post?.likes?.likedBy, userDetails?._id) ?
                                    <div className={'flex items-center gap-1'} onClick={() => removeFromLikes(post?._id)}>
                                        <AiFillHeart className={'text-red-500'}/>
                                        <span className={'text-sm'}>{post?.likes.likeCount}</span>
                                    </div> :
                                    <div className={'flex items-center gap-1'} onClick={() => addToLikes(post?._id)}>
                                        <AiOutlineHeart/>
                                        <span className={'text-sm'}>{post?.likes.likeCount}</span>
                                    </div>
                            }
                        </div>
                        <div className="comment cursor-pointer flex items-center gap-2"
                             onClick={() => setIsCommentModel(true)}>
                            <FaRegCommentDots/>
                            <span className={'text-sm'}>{post?.comments?.length}</span>
                        </div>
                        {isCommentModel && <CommentBox post={post} setIsCommentModel={setIsCommentModel}/>}

                        <div className="share cursor-pointer" onClick={() => setIsShareModel(true)}>
                            <AiOutlineShareAlt/>
                        </div>
                        {isShareModel && <ShareModel setIsShareModel={setIsShareModel} postId={post?._id}/>}
                    </div>
                    <div className="right">
                        <div className="bookmarks cursor-pointer">
                            {
                                isInBookmarks(post?._id) ?
                                    <BsBookmarksFill className={'text-button'} onClick={() => removeFromBookmarks(post?._id)}/> :
                                    <BsBookmarkPlus onClick={() => addToBookmarks(post?._id)}/>
                            }
                        </div>
                    </div>
                </div>
                {
                    post?.likes?.likeCount ?
                        <div
                            className="like-comment-overview sm:pl-8 flex gap-2 items-center text-sm cursor-pointer text-black/60 dark:text-white/60 hover:underline" onClick={()=>setIsLikedByModel(true)}>
                            <div className="images flex">
                                <img src={post?.likes?.likedBy[0]?.avatarUrl} alt="p" className={'w-4 aspect-square rounded-full'}/>
                            </div>
                            Liked by {isInLiked(post?.likes?.likedBy, userDetails?._id) ? 'You' : post?.likes?.likedBy[0]?.username === userDetails?.username ? 'You' : post?.likes?.likedBy[0]?.username } {post?.likes?.likeCount >= 2 ? ` and ${post?.likes?.likeCount-1} others` : null }
                        </div> :
                        <div
                            className="like-comment-overview flex gap-2 items-center text-sm text-black/60 dark:text-white/60 pl-2 sm:pl-8">
                            No one Liked Yet
                        </div>
                }
            </div>
            {isCreatePostModel &&
                <CreatePostModel isEdit={true} editPostData={post} setIsCreatePostModel={setIsCreatePostModel}/>}

            {isLikedByModel && <FollowModel content={'Liked By'} setIsFollowModel={setIsLikedByModel} followers={post?.likes?.likedBy}/>}
        </>
    );
};

export default PostCard;