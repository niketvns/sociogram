import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {PostCard, Sidebar, SkeletonLoader, Suggestions} from "../components";
import axios from "axios";
import profile from "../images/niket_img.png";
import {useGlobalAuth, useGlobalPosts, useGlobalUsers} from "../contexts";

const PostDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState(null)
    const {id} = useParams()
    const {isPostEditLoading, isLikedLoading, isCommentLoading} = useGlobalPosts()
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
                            <div className="create-comment rounded-lg bg-secondary p-2 py-4 flex items-start gap-2">
                                <div className="profile">
                                    <img src={userDetails?.avatarUrl} alt="profile"
                                         className={'w-8 rounded-full aspect-square'}/>
                                </div>
                                <textarea name="comment" id="comment" rows="2" placeholder={'Post Your Comment!'}
                                          className={'w-full resize-none h-12 px-4 rounded-lg bg-secondary text-sociogram border-none outline-0'}></textarea>
                                <button className={'bg-button text-white px-6 py-1 rounded-2xl'}>
                                    Post
                                </button>
                            </div>
                            <div className="all-comments py-2 px-4 text-sociogram">
                                {
                                    post?.comments.length ?
                                        <h1 className={'text-2xl'}>Comments</h1> :
                                        null
                                }
                                {
                                    post?.comments.map(comment => (
                                        <div key={comment._id}
                                             className="ind-comment flex flex-col items-start justify-start gap-2 my-2 p-2 py-4 rounded-lg bg-secondary">
                                            <div className="user flex gap-2">
                                                <div className="profile">
                                                    <img src={findUser(comment?.username).avatarUrl} alt="profile"
                                                         className={'w-8 rounded-full aspect-square object-cover'}/>
                                                </div>
                                                <div className={'text-lg'}>
                                                    <h3 className={''}>@{comment?.username}</h3>
                                                    <p className={'text-sm text-black/60 dark:text-white/60'}>Replying
                                                        to <span
                                                            className={'text-blue-600 hover:underline cursor-pointer'}
                                                            onClick={() => navigate(`/user/${post?.username}`)}>@{post?.username}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="comment-details flex-1 pl-9">
                                                <div className="text line-clamp-3 text-lg">{comment?.text}</div>
                                                {
                                                    comment?.mediaURL &&
                                                    <div className="media">
                                                        <img src={comment.mediaURL} alt="media"/>
                                                    </div>
                                                }
                                            </div>
                                        </div>
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