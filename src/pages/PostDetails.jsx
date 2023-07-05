import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {CommentCard, EmojiBox, PostCard, Sidebar, SkeletonLoader, Suggestions} from "../components";
import axios from "axios";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";
import {MdOutlineAddReaction} from "react-icons/md";

const PostDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isEmojiModel, setIsEmojiModel] = useState(false)
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState('')
    const {id} = useParams()
    const {isPostEditLoading, isLikedLoading, isCommentLoading, addComment} = useGlobalPosts()
    const {findUser} = useGlobalUsers()
    const {userDetails} = useGlobalAuth()

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
            className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                {
                    isLoading ?
                        <SkeletonLoader/> :
                        <>
                            <PostCard key={post?._id} post={post}/>
                            <div className={'create-comment'}>
                                <div
                                    className="comment-input rounded-lg bg-secondary p-2 py-4 flex items-start gap-2 relative">
                                    <div className="profile">
                                        <img src={findUser(userDetails?.username)?.avatarUrl} alt="profile"
                                             className={'w-8 rounded-full aspect-square'}/>
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
                        </>
                }
            </div>
            {/*Suggestions*/}
            <Suggestions/>
        </div>
    );
};

export default PostDetails;