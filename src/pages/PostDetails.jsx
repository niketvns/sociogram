import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {PostCard, Sidebar, SkeletonLoader, Suggestions} from "../components";
import axios from "axios";
import {useGlobalPosts} from "../contexts";
import profile from "../images/niket_img.png";

const PostDetails = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState(null)
    const {id} = useParams()

    const fetchSinglePost = async () =>{
        setIsLoading(true)
        try {
            const { data } = await axios.get(`/api/posts/${id}`)
            setPost(data.post)
        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchSinglePost()
    },[])

    return (
        <div className={'home-main flex gap-5 sm:justify-start lg:justify-center items-start lg:gap-4 p-2 sm:pl-0 relative'}>
            <Sidebar/>
            {/*All Posts*/}
            <div className="posts w-full md:w-1/2 lg:w-[45%] pt-4 sm:pt-10 flex flex-col md:flex-1 lg:flex-none gap-4">
                {
                    isLoading ?
                        <SkeletonLoader/> :
                        <>
                            <PostCard key={post._id} post={post}/>
                            <div className="create-comment rounded-lg bg-secondary p-2 py-4  flex items-start gap-2">
                                <div className="profile">
                                    <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                                </div>
                                <textarea name="comment" id="comment" rows="2" placeholder={'Post Your Comment!'} className={'w-full resize-none h-12 px-4 rounded-lg bg-secondary border-none outline-0'}></textarea>
                                <button className={'bg-button px-6 py-1 rounded-2xl'}>
                                    Post
                                </button>
                            </div>
                            <div className="all-comments py-2 px-4">
                                {
                                    post.comments.length ?
                                        <h1 className={'text-2xl'}>Comments</h1> :
                                        null
                                }
                                {
                                    post.comments.map(comment => (
                                        <div key={comment._id} className="ind-comment flex flex-col items-start justify-start gap-2 my-2 p-2 py-4 rounded-lg bg-secondary">
                                            <div className="user flex gap-2">
                                                <div className="profile">
                                                    <img src={profile} alt="profile" className={'w-8 rounded-full aspect-square'}/>
                                                </div>
                                                <div className={'text-sm'}>
                                                    <h3 className={'capitalize'}>@{comment.username}</h3>
                                                    <p>Replying to <span className={'text-blue-600 hover:underline cursor-pointer'}>@niketmishra</span></p>
                                                </div>
                                            </div>
                                            <div className="comment-details flex-1 pl-9">
                                                    <div className="text line-clamp-3 text-sm">{comment.text}</div>
                                                    {
                                                        comment.mediaURL &&
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