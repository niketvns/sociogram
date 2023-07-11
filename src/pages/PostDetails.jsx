import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {CommentCard, EmojiBox, PostCard, Sidebar, SkeletonLoader, Suggestions} from "../components";
import axios from "axios";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {MdOutlineAddReaction} from "react-icons/md";
import {BiArrowBack} from "react-icons/bi";

const PostDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmojiModel, setIsEmojiModel] = useState(false)
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState('')
    const {id} = useParams()
    const {isPostEditLoading, isLikedLoading, isCommentLoading, addComment} = useGlobalPosts()
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()
    const navigate = useNavigate()

    const fetchSinglePost = async () => {
        try {
            const {data} = await axios.get(`/api/posts/${id}`)
            setPost(data.post)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        window.scrollTo({top: 0, left: 0});
        fetchSinglePost()
    }, [])

    useEffect(() => {
        if (isPostEditLoading || isLikedLoading || isCommentLoading)
            fetchSinglePost();
    }, [isPostEditLoading, isLikedLoading, isCommentLoading])

    useEffect(() => {
        if (post) {
            document.title = `${post?.username} on Sociogram : "${post?.content.slice(0, 40)}..."`
        } else {
            document.title = `Post | Sociogram`
        }
    }, [post])

    const submitCommentHandler = () => {
        if (comment) {
            addComment(post?._id, comment)
            setComment('')
        }
    }

    return (
        <div
            className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 xs:p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                {
                    isLoading ?
                        <SkeletonLoader/> :
                        post ?
                        <>
                            <div
                                className="back-option flex justify-start items-center gap-2 px-3 py-2 bg-secondary text-sociogram">
                                <div
                                    className="back-icon text-xl cursor-pointer hover:bg-black/20 hover:dark:bg-white/20 p-2 rounded-full transition"
                                    onClick={() => navigate(-1)}>
                                    <BiArrowBack/>
                                </div>
                                <div>Back</div>
                            </div>

                            <PostCard key={post?._id} post={post}/>
                            <div className={'create-comment'}>
                                <div
                                    className="comment-input rounded-lg bg-secondary p-2 py-4 flex items-start gap-2 relative">
                                    <div className="profile">
                                        {
                                            findUser(userDetails?.username)?.avatarUrl ?
                                                <img src={findUser(userDetails?.username)?.avatarUrl} alt="profile"
                                                     className={'w-8 rounded-full aspect-square object-cover'}/>:
                                                <div className={'w-8 aspect-square sm:w-10 object-cover rounded-full cursor-pointer bg-black/40 dark:bg-white/40 flex items-center justify-center text-lg font-bold text-white'}>
                                                    {(findUser(userDetails?.username) ?? userDetails)?.firstName.slice(0,1).toUpperCase()}
                                                </div>
                                        }
                                    </div>
                                    <textarea
                                        name="comment"
                                        id="comment"
                                        rows="1"
                                        placeholder={'Post Your Comment!'}
                                        className={'w-full resize-none h-12 px-4 rounded-lg bg-secondary text-sociogram border-none outline-0'}
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                    <button className={'text-2xl absolute top-1/2 right-4 text-sociogram'}>
                                        <MdOutlineAddReaction onClick={() => setIsEmojiModel(true)}/>
                                        {
                                            isEmojiModel &&
                                            <div
                                                className={'emoji-box-main absolute right-0 top-full z-10'}>
                                                <EmojiBox setIsEmojiModel={setIsEmojiModel} setPost={setComment}
                                                          isComment={true}/>
                                            </div>
                                        }
                                    </button>
                                </div>
                                {
                                    comment &&
                                    <div className="comment-btn flex justify-end pr-4 pt-2">
                                        <button
                                            className={`text-white px-6 py-1 rounded-2xl ${comment ? 'bg-button' : 'bg-gray-500 cursor-not-allowed'}`}
                                            onClick={submitCommentHandler}>
                                            Post
                                        </button>
                                    </div>
                                }
                            </div>
                            <div className="all-comments py-2 px-4 text-sociogram">
                                {
                                    post?.comments.length ?
                                        <h1 className={'text-2xl'}>Comments</h1> :
                                        null
                                }
                                {
                                    [...post?.comments].reverse().map(comment => (
                                        <CommentCard key={comment._id} comment={comment} post={post}
                                                     userDetails={userDetails}/>
                                    ))
                                }
                            </div>
                        </>:
                            <p className='text-xl font-bold text-black/40 text-center pt-5'>Post Not Available</p>
                }
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default PostDetails;